import { createReducer } from "@reduxjs/toolkit";

export const cartreducer = createReducer(
  {
    cartitem: localStorage.getItem("cartitem")
      ? JSON.parse(localStorage.getItem("cartitem"))
      : [],
    totalAmount: localStorage.getItem("totalAmount")
      ? localStorage.getItem("totalAmount")
      : 0,
    SubTotal: localStorage.getItem("SubTotal")
      ? localStorage.getItem("SubTotal")
      : 0,
    tax: localStorage.getItem("tax") ? localStorage.getItem("tax") : 0,
    Shipingprice: localStorage.getItem("Shipingprice")
      ? localStorage.getItem("Shipingprice")
      : 0,
    UserName: localStorage.getItem("UserName")
      ? localStorage.getItem("UserName")
      : "",
    Phone: localStorage.getItem("Phone") ? localStorage.getItem("Phone") : "",
    Address: localStorage.getItem("Address")
      ? localStorage.getItem("Address")
      : "",
    Email: localStorage.getItem("Email") ? localStorage.getItem("Email") : "",
    UserLogin: localStorage.getItem("UserLogin")
      ? localStorage.getItem("UserLogin")
      : 0,
  },
  (builder) => {
    builder
      .addCase("addtocart", (state, action) => {
        const items = action.payload;
        const itemExist = state.cartitem.find((i) => i.id === items.id);
        if (itemExist) {
          state.cartitem.forEach((i) => {
            if (i.id === items.id) {
              i.qty += 1;
            }
          });
        } else {
          state.cartitem.push(items);
        }
      })
      .addCase("decrement", (state, action) => {
        const items = action.payload;
        state.cartitem.forEach((i) => {
          if (i.id === items.id) {
            if (i.qty > 1) {
              i.qty -= 1;
            } else {
              state.cartitem = state.cartitem.filter((i) => items.id !== i.id);
            }
          }
        });
      })
      .addCase("deletehandler", (state, action) => {
        const items = action.payload;
        state.cartitem = state.cartitem.filter((i) => items.id !== i.id);
      })
      .addCase("calculatePrice", (state) => {
        let sum = 0;
        state.cartitem.forEach((i) => {
          sum += i.price * i.qty;
        });
        state.SubTotal = sum;
        if (state.cartitem.length > 0) {
          state.Shipingprice = state.SubTotal > 150 ? 15 : 30;
        } else {
          state.Shipingprice = 0;
        }
        state.tax = +(state.SubTotal * 0.18).toFixed();
        state.totalAmount = state.SubTotal + state.Shipingprice + state.tax;

        // Persist to localStorage
        localStorage.setItem("totalAmount", state.totalAmount);
        localStorage.setItem("SubTotal", state.SubTotal);
        localStorage.setItem("tax", state.tax);
        localStorage.setItem("Shipingprice", state.Shipingprice);
      })
      .addCase("storage", (state) => {
        localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
      })
      .addCase("delleteall", (state) => {
        state.cartitem = [];
      })
      .addCase("UserData", (state, action) => {
        state.UserName = action.payload.name;
        state.Phone = action.payload.phone;
        state.Address = action.payload.address;
        state.Email = action.payload.email;
        state.UserLogin = 1;
        // Persist user data to localStorage
        localStorage.setItem("UserLogin", state.UserLogin);
        localStorage.setItem("Email", state.Email);
        localStorage.setItem("UserName", state.UserName);
        localStorage.setItem("Phone", state.Phone);
        localStorage.setItem("Address", state.Address);
      })
      .addCase("LogOut", (state) => {
        state.UserName = "";
        state.Phone = "";
        state.Address = "";
        state.Email = "";
        state.UserLogin = 0;

        // Clear user data from localStorage
        localStorage.setItem("UserLogin", state.UserLogin);
        localStorage.setItem("Email", state.Email);
        localStorage.setItem("UserName", state.UserName);
        localStorage.setItem("Phone", state.Phone);
        localStorage.setItem("Address", state.Address);
      });
  }
);
