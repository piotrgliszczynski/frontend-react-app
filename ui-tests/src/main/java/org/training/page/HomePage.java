package org.training.page;

import lombok.Getter;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.training.page.base.BasePage;
import org.training.page.components.AddUpdateForm;
import org.training.page.components.CustomerListTitle;
import org.training.page.components.CustomerTable;
import org.training.utils.config.TestConfig;

@Getter
public class HomePage extends BasePage {

  private final CustomerListTitle customerListTitle;
  private final CustomerTable customerTable;
  private final AddUpdateForm addUpdateForm;

  public HomePage(WebDriver driver) {
    super(driver);
    customerListTitle = new CustomerListTitle(driver);
    customerTable = new CustomerTable(driver);
    addUpdateForm = new AddUpdateForm(driver);
  }

  public void load() {
    load(TestConfig.baseUrl);
    wait.until(ExpectedConditions.titleContains("Customers App"));
  }
}
