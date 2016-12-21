/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import ReactComponent from "src/components/react-component";

describe("components/react-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<ReactComponent />);
      expect(component).to.not.be.null;
    });

  });

});
