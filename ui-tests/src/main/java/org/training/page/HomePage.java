package org.training.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.training.page.base.BasePage;
import org.training.utils.config.TestConfig;

public class HomePage extends BasePage {

  public HomePage(WebDriver driver) {
    super(driver);
  }

  public void load() {
    load(TestConfig.baseUrl);
    wait.until(ExpectedConditions.titleContains("Customers App"));
  }
}
