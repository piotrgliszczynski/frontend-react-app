package org.training.steps;

import org.openqa.selenium.WebDriver;
import org.training.page.HomePage;
import org.training.steps.base.BaseSteps;

public class CustomerTableSteps extends BaseSteps {

  private final HomePage homePage;

  public CustomerTableSteps(WebDriver driver) {
    super(driver);
    homePage = new HomePage(driver);
  }

  public CustomerTableSteps openHomePage() {
    homePage.load();
    return this;
  }

  public String getNameHeader() {
    return homePage.getCustomerTableNameHeader();
  }

  public String getEmailHeader() {
    return homePage.getCustomerTableEmailHeader();
  }

  public String getPasswordHeader() {
    return homePage.getCustomerTablePasswordHeader();
  }
}
