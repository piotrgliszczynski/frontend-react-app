package org.training.test;

import org.junit.jupiter.api.Test;
import org.training.steps.AddUpdateFormSteps;
import org.training.test.base.BaseTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class AddUpdateFormTest extends BaseTest {

  private AddUpdateFormSteps addUpdateFormSteps;

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
    boolean isFormVisible = addUpdateFormSteps.openHomePage()
        .isFormVisible();
    assertTrue(isFormVisible);

    // When
    boolean isFormInAddState = addUpdateFormSteps.isFormInAddState();

    // Then
    assertTrue(isFormInAddState);
  }

  @Override
  public void prepareSteps() {
    addUpdateFormSteps = new AddUpdateFormSteps(getDriver());
  }
}
