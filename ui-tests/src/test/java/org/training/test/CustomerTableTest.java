package org.training.test;

import org.junit.jupiter.api.Test;
import org.training.steps.CustomerTableSteps;
import org.training.test.base.BaseTest;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CustomerTableTest extends BaseTest {

  private CustomerTableSteps customerTableSteps;

  @Test
  void shouldContainHeaderRow_In_CustomerTable_When_NavigatingToMainPage() {
    // Given
    String expectedNameHeader = "Name";
    String expectedEmailHeader = "Email";
    String expectedPasswordHeader = "Pass";
    customerTableSteps.openHomePage();

    // When
    String actualNameHeader = customerTableSteps.getNameHeader();
    String actualEmailHeader = customerTableSteps.getEmailHeader();
    String actualPasswordHeader = customerTableSteps.getPasswordHeader();

    // Then
    assertAll(
        () -> assertEquals(expectedNameHeader, actualNameHeader),
        () -> assertEquals(expectedEmailHeader, actualEmailHeader),
        () -> assertEquals(expectedPasswordHeader, actualPasswordHeader)
    );
  }

  @Override
  public void prepareSteps() {
    customerTableSteps = new CustomerTableSteps(getDriver());
  }
}
