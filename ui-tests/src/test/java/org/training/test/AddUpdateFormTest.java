package org.training.test;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ArgumentsSource;
import org.training.data.Customer;
import org.training.data.providers.CustomerDataProvider;
import org.training.steps.AddUpdateFormSteps;
import org.training.steps.CustomerTableSteps;
import org.training.test.base.BaseTest;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AddUpdateFormTest extends BaseTest {

  private AddUpdateFormSteps addUpdateFormSteps;
  private CustomerTableSteps customerTableSteps;

  @Test
  void addUpdateFormShouldBeVisible_When_NavigateToMainPage() {
    // Given
    addUpdateFormSteps.openHomePage();

    // When
    boolean isFormVisible = addUpdateFormSteps.isFormVisible();

    // Then
    assertTrue(isFormVisible);
  }

  @Test
  void addUpdateFormShouldBeInAddState_When_NavigateToMainPage() {
    // Given
    addUpdateFormSteps.openHomePage();

    // When
    boolean isFormInAddState = addUpdateFormSteps.isFormInAddState();

    // Then
    assertTrue(isFormInAddState);
  }

  @ParameterizedTest
  @ArgumentsSource(CustomerDataProvider.class)
  void addUpdateFormShouldBeInUpdateState_When_CustomerIsSelected(Customer customer) {
    // Given
    customerTableSteps.openHomePage()
        .clickOnCustomer(customer);

    // When
    boolean isFormInUpdateState = addUpdateFormSteps.isFormInUpdateState();

    // Then
    assertTrue(isFormInUpdateState);
  }

  @Test
  void addUpdateFormInAddState_ShouldFieldsBeEmpty_When_NavigateToMainPage() {
    // Given
    addUpdateFormSteps.openHomePage();

    // When
    boolean areFormsEmpty = addUpdateFormSteps.areFieldsEmpty();

    // Then
    assertTrue(areFormsEmpty);
  }

  @ParameterizedTest
  @ArgumentsSource(CustomerDataProvider.class)
  void addUpdateFormInUpdateState_ShouldFieldsBeFilled_CustomerIsSelected(Customer customer) {
    // Given
    customerTableSteps.openHomePage()
        .clickOnCustomer(customer);

    // When
    boolean areFieldsFilled = addUpdateFormSteps.areFieldsFilled(customer);

    // Then
    assertTrue(areFieldsFilled);
  }

  @Test
  void addUpdateFormShouldBeClear_When_CustomerIsDeselected() {
    // Given
    customerTableSteps.openHomePage()
        .clickFirstCustomer();

    // When
    customerTableSteps.clickFirstCustomer();
    boolean isFormInAddState = addUpdateFormSteps.isFormInAddState();
    boolean areFormsEmpty = addUpdateFormSteps.areFieldsEmpty();

    // Then
    assertAll(
        () -> assertTrue(isFormInAddState),
        () -> assertTrue(areFormsEmpty)
    );
  }

  @Test
  void shouldBeAbleToTypeDataToForm_When_FormInAddState() {
    // Given
    String name = "test";
    String email = "test@test.com";
    String password = "12345";

    addUpdateFormSteps.openHomePage();

    // When
    boolean formFilledCorrectly = addUpdateFormSteps.typeData(name, email, password)
        .fieldsEqual(name, email, password);

    // Then
    assertTrue(formFilledCorrectly);
  }

  @ParameterizedTest
  @ArgumentsSource(CustomerDataProvider.class)
  void shouldBeAbleToTypeDataToForm_When_FormInUpdateState(Customer customer) {
    // Given
    String name = "changed";
    String email = "changed";
    String password = "changed";

    customerTableSteps.openHomePage()
        .clickOnCustomer(customer);

    // When
    boolean formFilledCorrectly = addUpdateFormSteps.typeData(name, email, password)
        .fieldsEqual(
            customer.getName() + name,
            customer.getEmail() + email,
            customer.getPassword() + password);

    // Then
    assertTrue(formFilledCorrectly);
  }

  @Override
  public void prepareSteps() {
    addUpdateFormSteps = new AddUpdateFormSteps(getDriver());
    customerTableSteps = new CustomerTableSteps(getDriver());
  }
}
