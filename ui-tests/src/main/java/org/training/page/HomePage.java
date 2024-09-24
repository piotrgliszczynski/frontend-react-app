package org.training.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.training.data.Customer;
import org.training.page.base.BasePage;
import org.training.utils.config.TestConfig;

import java.util.List;

public class HomePage extends BasePage {

  private final By customerListTitle = By.id("customer-list-title");
  private final By customerTable = By.id("customer-table");
  private final By customerRow = By.cssSelector("#customer-table > tbody > tr");

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

  public List<Customer> getAllCustomers() {
    WebElement table = wait.until(ExpectedConditions.visibilityOfElementLocated(customerTable));

    wait.until(ExpectedConditions.visibilityOfElementLocated(customerRow));
    List<WebElement> rows = table.findElements(By.cssSelector("tbody > tr"));
    return rows.stream()
        .map(row -> row.findElements(By.tagName("td")))
        .map(columns -> new Customer(
            columns.get(0).getText(),
            columns.get(1).getText(),
            columns.get(2).getText())
        )
        .toList();
  }

  public boolean isCustomerClickable() {
    wait.until(ExpectedConditions.visibilityOfElementLocated(customerTable));
    wait.until(ExpectedConditions.elementToBeClickable(customerRow));
    return true;
  }
}
