package org.training.test.base;

import lombok.Getter;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.WebDriver;
import org.training.driver.factory.DriverFactory;
import org.training.driver.type.DriverType;

@Getter
public abstract class BaseTest {

  private WebDriver driver;

  @BeforeEach
  void startDriver() {
    driver = DriverFactory.getManager(DriverType.CHROME).createDriver();
    prepareSteps();
  }

  public abstract void prepareSteps();

  @AfterEach
  void quitDriver() {
    driver.quit();
  }
}
