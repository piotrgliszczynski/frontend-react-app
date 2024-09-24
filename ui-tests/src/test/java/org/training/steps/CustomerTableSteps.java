package org.training.steps;

import org.openqa.selenium.WebDriver;
import org.training.data.Customer;
import org.training.page.HomePage;
import org.training.steps.base.BaseSteps;

import java.util.List;

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

  public List<Customer> getAllCustomers() {
    return homePage.getAllCustomers();
  }

  public boolean isRowClickable() {
    return homePage.isCustomerClickable();
  }

  public CustomerTableSteps clickCustomer() {
    homePage.clickCustomer();
    return this;
  }

  public boolean isSelected() {
    return homePage.getRowClass().contains("selected");
  }
}
