package org.training.test;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.training.api.actions.CustomersApi;
import org.training.data.Customer;
import org.training.exception.RestApiException;
import org.training.steps.AddUpdateFormSteps;
import org.training.steps.CustomerTableSteps;
import org.training.test.base.BaseTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class CrudButtonTest extends BaseTest {

  private final CustomersApi customersApi = new CustomersApi();
  private AddUpdateFormSteps addUpdateFormSteps;
  private CustomerTableSteps customerTableSteps;

  private Customer createdCustomer;

  @AfterEach
  void deleteAllCreatedCustomers() {
    try {
      customersApi.deleteCustomer(createdCustomer);
    } catch (RestApiException e) {
      System.out.println("Record don't exist in the db already!");
    }
  }

  @Test
  void shouldDeleteRecord_AfterClick_DeleteButton() throws RestApiException {
    // Given
    Customer customer = new Customer("test", "test@test.com", "12345");
    createdCustomer = customersApi.createCustomer(customer);

    customerTableSteps.openHomePage()
        .clickOnCustomer(createdCustomer);

    // When
    addUpdateFormSteps.clickDelete();
    boolean isFormCleared = addUpdateFormSteps.areFieldsEmpty();
    List<Customer> customers = customersApi.getCustomers();

    // Then
    assertAll(
        () -> assertTrue(isFormCleared),
        () -> assertFalse(customers.contains(createdCustomer))
    );
  }

  @Test
  void shouldDeleteRecord_AfterClick_RecordIsNotVisibleOnList() throws RestApiException {
    // Given
    Customer customer = new Customer("test", "test@test.com", "12345");
    createdCustomer = customersApi.createCustomer(customer);

    customerTableSteps.openHomePage()
        .clickOnCustomer(createdCustomer);

    // When
    addUpdateFormSteps.clickDelete();
    List<Customer> customers = customerTableSteps.getAllCustomers();

    // Then
    assertFalse(customers.contains(createdCustomer));
  }

  @Test
  void shouldAddRecord_AfterClick_CorrectlyAdded() throws RestApiException {
    // Given
    createdCustomer = new Customer("test", "test@test.com", "12345");

    addUpdateFormSteps.openHomePage()
        .typeData(createdCustomer);

    // When
    addUpdateFormSteps.clickSave();
    List<Customer> customers = customersApi.getCustomers();
    boolean areFieldsEmpty = addUpdateFormSteps.areFieldsEmpty();

    createdCustomer = customers.get(
        customers.indexOf(createdCustomer)
    );

    // Then
    assertAll(
        () -> assertTrue(areFieldsEmpty),
        () -> assertTrue(customers.contains(createdCustomer))
    );
  }

  @Test
  void shouldAddRecord_AfterClick_CustomerVisibleOnPage() throws RestApiException {
    // Given
    createdCustomer = new Customer("test", "test@test.com", "12345");

    addUpdateFormSteps.openHomePage()
        .typeData(createdCustomer);

    // When
    addUpdateFormSteps.clickSave();
    List<Customer> customers = customerTableSteps.getAllCustomers();

    List<Customer> apiCustomers = customersApi.getCustomers();
    createdCustomer = apiCustomers.get(
        apiCustomers.indexOf(createdCustomer)
    );

    // Then
    assertTrue(customers.contains(createdCustomer));
  }

  @Override
  public void prepareSteps() {
    addUpdateFormSteps = new AddUpdateFormSteps(getDriver());
    customerTableSteps = new CustomerTableSteps(getDriver());
  }
}
