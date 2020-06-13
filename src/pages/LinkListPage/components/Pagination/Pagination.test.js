import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "./Pagination";
import Pager, { Item, Prev, Next } from "react-bootstrap/Pagination";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SORTING_ORDER } from "../../../../constants";

configure({ adapter: new Adapter() });

describe("<Pager.Prev/>", function () {
  const initialState = {
    links: [],
    order: SORTING_ORDER.DEFAULT,
    page: {
      pageNumber: 1,
      pageCount: 5,
      totalItemCount: 10,
    },
  };
  const mockStore = configureStore();
  let store, wrapper;

  it("should render one <Pager.Prev/> elements", function () {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <Pagination totalItemCount={15} pageCount={5} pageNumber={1} />
      </Provider>
    );
    expect(wrapper.find(Pager.Item)).toHaveLength(5);
    expect(wrapper.find(Pager.Prev)).toHaveLength(1);
    expect(wrapper.find(Pager.Next)).toHaveLength(1);
  });
});
