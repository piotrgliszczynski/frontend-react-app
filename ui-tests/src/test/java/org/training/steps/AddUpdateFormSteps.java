package org.training.steps;

import org.openqa.selenium.WebDriver;
import org.training.data.Customer;
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

  public AddUpdateFormSteps typeData(Customer customer) {
    typeData(customer.getName(), customer.getEmail(), customer.getPassword());
    return this;
  }

  public AddUpdateFormSteps typeData(String name, String email, String password) {
    homePage.getAddUpdateForm().typeName(name);
    homePage.getAddUpdateForm().typeEmail(email);
    homePage.getAddUpdateForm().typePassword(password);
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
    if (!areButtonsVisible()) {
      return false;
    }
    return true;
  }

  public boolean areButtonsVisible() {
    if (!homePage.getAddUpdateForm().getCrudButtons().getDeleteButtonText().equals("Delete")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getCrudButtons().getSaveButtonText().equals("Save")) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getCrudButtons().getCancelButtonText().equals("Cancel")) {
      return false;
    }
    return true;
  }

  public boolean isFormInAddState() {
    return homePage.getAddUpdateForm().getAddUpdateFormTitle().equals("Add");
  }

  public boolean isFormInUpdateState() {
    return homePage.getAddUpdateForm().getAddUpdateFormTitle().equals("Update");
  }

  public boolean areFieldsEmpty() {
    if (!homePage.getAddUpdateForm().getNameValue().isEmpty()) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getEmailValue().isEmpty()) {
      return false;
    }
    if (!homePage.getAddUpdateForm().getPasswordValue().isEmpty()) {
      return false;
    }
    return true;
  }

  public boolean areFieldsFilled(Customer customer) {
    return homePage.getAddUpdateForm().getNameValue().equals(customer.getName())
        && homePage.getAddUpdateForm().getEmailValue().equals(customer.getEmail())
        && homePage.getAddUpdateForm().getPasswordValue().equals(customer.getPassword());
  }

  public boolean fieldsEqual(String name, String email, String password) {
    return homePage.getAddUpdateForm().getNameValue().equals(name)
        && homePage.getAddUpdateForm().getEmailValue().equals(email)
        && homePage.getAddUpdateForm().getPasswordValue().equals(password);
  }

  public void clickDelete() {
    homePage.getAddUpdateForm().getCrudButtons().clickDelete();
    homePage.getAddUpdateForm().handleAlert();
  }

  public void clickSave() {
    homePage.getAddUpdateForm().getCrudButtons().clickSave();
  }
}
