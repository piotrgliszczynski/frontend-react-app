package org.training.test;

import org.junit.jupiter.api.Test;
import org.training.steps.CustomerListTitleSteps;
import org.training.test.base.BaseTest;

public class CustomerListTitleTest extends BaseTest {

  private CustomerListTitleSteps customerListTitleSteps;


  @Test
  void firstTest() {
    customerListTitleSteps.openHomePage();
  }

  @Override
  public void prepareSteps() {
    customerListTitleSteps = new CustomerListTitleSteps(getDriver());
  }
}
