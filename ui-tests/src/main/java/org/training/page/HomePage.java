package org.training.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.training.page.base.BasePage;
import org.training.utils.config.TestConfig;

public class HomePage extends BasePage {

  private final By customerListTitle = By.id("customer-list-title");
  private final By customerTable = By.id("customer-table");

  public HomePage(WebDriver driver) {
    super(driver);
  }

  public void load() {
    load(TestConfig.baseUrl);
    wait.until(ExpectedConditions.titleContains("Customers App"));
  }

  public String getCustomerListTitle() {
    return wait
        .until(ExpectedConditions.visibilityOfElementLocated(customerListTitle))
        .getText();
  }

  public String getCustomerTableNameHeader() {
    WebElement table = wait.until(ExpectedConditions.visibilityOfElementLocated(customerTable));
    return wait.until(
        ExpectedConditions.visibilityOf(
            table.findElement(By.cssSelector("thead > tr > th:nth-child(1)")))
    ).getText();
  }

  public String getCustomerTableEmailHeader() {
    WebElement table = wait.until(ExpectedConditions.visibilityOfElementLocated(customerTable));
    return wait.until(
        ExpectedConditions.visibilityOf(
            table.findElement(By.cssSelector("thead > tr > th:nth-child(2)")))
    ).getText();
  }

  public String getCustomerTablePasswordHeader() {
    WebElement table = wait.until(ExpectedConditions.visibilityOfElementLocated(customerTable));
    return wait.until(
        ExpectedConditions.visibilityOf(
            table.findElement(By.cssSelector("thead > tr > th:nth-child(3)")))
    ).getText();
  }
}
