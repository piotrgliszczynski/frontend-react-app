package org.training.steps;

import org.openqa.selenium.WebDriver;
import org.training.page.HomePage;
import org.training.steps.base.BaseSteps;

public class AddUpdateFormSteps extends BaseSteps {

  private final HomePage homePage;

  public AddUpdateFormSteps(WebDriver driver) {
    super(driver);
    homePage = new HomePage(driver);
  }

  public AddUpdateFormSteps openHomePage() {
    homePage.load();
    return this;
  }

  public boolean isFormVisible() {
    if (!homePage.getAddUpdateForm().getAddUpdateFormTitle().equals("Add")
        && !homePage.getAddUpdateForm().getAddUpdateFormTitle().equals("Update")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getNameLabel().equals("Name:")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getNamePlaceholder().equals("Customer Name")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getEmailLabel().equals("Email:")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getEmailPlaceholder().equals("name@company.com")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getPasswordLabel().equals("Pass:")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getPasswordPlaceholder().equals("password")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getDeleteButtonText().equals("Delete")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getSaveButtonText().equals("Save")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getCancelButtonText().equals("Cancel")) {
      return false;
    }
    return true;
  }

  public boolean isFormInAddState() {
    return homePage.getAddUpdateForm().getAddUpdateFormTitle().equals("Add");
  }
}
