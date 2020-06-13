import reducer from "./reducers";
import * as actionTypes from "./action-types";
import { SORTING_ORDER } from "../../../constants";

describe("link list page reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      links: [],
      order: SORTING_ORDER.DEFAULT,
      page: {
        pageNumber: 1,
        pageCount: 5,
        totalItemCount: 0,
      },
    });
  });

  it("should return the initial state", () => {
    expect(
      reducer(
        {
          links: [],
          order: SORTING_ORDER.DEFAULT,
          page: {
            pageNumber: 1,
            pageCount: 5,
            totalItemCount: 0,
          },
        },
        {
          type: actionTypes.GET_LINKS,
          page: {
            pageNumber: 1,
            pageCount: 5,
            totalItemCount: 0,
          },
        }
      )
    ).toEqual({
      links: [],
      order: SORTING_ORDER.DEFAULT,
      page: {
        pageNumber: 1,
        pageCount: 5,
        totalItemCount: 0,
      },
    });
  });
});
