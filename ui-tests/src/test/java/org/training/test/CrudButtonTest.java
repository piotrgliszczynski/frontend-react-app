package org.training.test;

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

  @Test
  void shouldDeleteRecord_AfterClick_DeleteButton() throws RestApiException {
    // Given
    Customer customer = new Customer("test", "test@test.com", "12345");
    Customer createdCustomer = customersApi.createCustomer(customer);

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

  @Override
  public void prepareSteps() {
    addUpdateFormSteps = new AddUpdateFormSteps(getDriver());
    customerTableSteps = new CustomerTableSteps(getDriver());
  }
}
