package org.training.page.components;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.training.page.base.BasePage;

public class AddUpdateForm extends BasePage {

  private final By addUpdateFormTitle = By.id("add-update-form-title");

  private final By nameLabel = By.cssSelector("label[for='name']");
  private final By nameInput = By.id("name");
  private final By emailLabel = By.cssSelector("label[for='email']");
  private final By emailInput = By.id("email");
  private final By passwordLabel = By.cssSelector("label[for='password']");
  private final By passwordInput = By.id("password");

  private final By deleteButton = By.id("btn-delete");
  private final By saveButton = By.id("btn-save");
  private final By cancelButton = By.id("btn-cancel");

  public AddUpdateForm(WebDriver driver) {
    super(driver);
  }

  public String getAddUpdateFormTitle() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(addUpdateFormTitle)).getText();
  }

  public String getNameLabel() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(nameLabel)).getText();
  }

  public String getNamePlaceholder() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(nameInput)).getAttribute("placeholder");
  }

  public String getNameValue() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(nameInput)).getAttribute("value");
  }

  public String getEmailLabel() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(emailLabel)).getText();
  }

  public String getEmailPlaceholder() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(emailInput)).getAttribute("placeholder");
  }

  public String getEmailValue() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(emailInput)).getAttribute("value");
  }

  public String getPasswordLabel() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(passwordLabel)).getText();
  }

  public String getPasswordPlaceholder() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(passwordInput)).getAttribute("placeholder");
  }

  public String getPasswordValue() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(passwordInput)).getAttribute("value");
  }

  public String getDeleteButtonText() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(deleteButton)).getText();
  }

  public String getSaveButtonText() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(saveButton)).getText();
  }

  public String getCancelButtonText() {
    return wait.until(ExpectedConditions.visibilityOfElementLocated(cancelButton)).getText();
  }
}
