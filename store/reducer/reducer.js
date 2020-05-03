import ActionTypes from "../constant/constant";

const INITIAL_STATE = {
  userName: "Haider",
  currentUser: "",
  users: [],
  messages: {},
  recipientID: "",
  Payload: [
    {
      catagory: "Appetizers",
      items: [
        {
          itemName: "Sm.Tzatziki",
          details:
            "Greek yogurt dip with cucumbers garlic and olive oil, served with pita bread",
          price: 3.5,
          quantity: 1
        },
        {
          itemName: "Sm. Hummus",
          details:
            "4oz. Cup Puréed chickpeas, tahini, garlic lemon and olive oil, served with 1 pita bread",
          price: 3.5,
          quantity: 1
        },
        {
          itemName: "Lg.Tzatziki",
          details:
            "Puréed chickpeas, tahini, garlic, lemon and olive oil, served with pita bread",
          price: 7.0,
          quantity: 1
        },
        {
          itemName: "Lg.Humus",
          details:
            "8oz. Cup & Puréed chickpeas, tahini, garlic lemon and olive oil, served with 2 pita brea",
          price: 7.0,
          quantity: 1
        },
        {
          itemName: "Dolmadakia",
          details:
            "Vine leaves stuffed with seasoned rice, served with tzatziki and pita bread",
          price: 7.5,
          quantity: 1
        }
      ]
    },
    {
      catagory: "Special Dinners Offers",
      items: [
        {
          itemName: "Dinner For 2",
          details:
            "Includes 4 Souvlaki Sticks, choose from Chicken or Pork (also available Beef or Lamb)",
          price: 33,
          minSelectedItems: 6,
          Selections: [
            {
              SelectOptionText: "Choose Your souvlaki",

              type: "select",
              options: [
                {
                  itemName: "Select Option",
                  price: 0,
                  quantity: 0
                },
                {
                  itemName: "1 Stick Chicken",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Pork",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Beef",
                  price: 1.5,
                  quantity: 1
                },
                {
                  itemName: "1 Stick lamb",
                  price: 1.5,
                  quantity: 1
                }
              ]
            },
            {
              SelectOptionText: "Choose Your souvlaki",
              type: "select",
              options: [
                {
                  itemName: "Select Option",
                  price: 0,
                  quantity: 0
                },
                {
                  itemName: "1 Stick Chicken",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Pork",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Beef",
                  price: 1.5,
                  quantity: 1
                },
                {
                  itemName: "1 Stick lamb",
                  price: 1.5,
                  quantity: 1
                }
              ]
            },
            {
              SelectOptionText: "Choose Your souvlaki",
              type: "select",
              options: [
                {
                  itemName: "Select Option",
                  price: 0,
                  quantity: 0
                },
                {
                  itemName: "1 Stick Chicken",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Pork",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Beef",
                  price: 1.5,
                  quantity: 1
                },
                {
                  itemName: "1 Stick lamb",
                  price: 1.5,
                  quantity: 1
                }
              ]
            },
            {
              SelectOptionText: "Choose Your souvlaki",
              type: "select",
              options: [
                {
                  itemName: "Select Option",
                  price: 0,
                  quantity: 0
                },
                {
                  itemName: "1 Stick Chicken",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Pork",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "1 Stick Beef",
                  price: 1.5,
                  quantity: 1
                },
                {
                  itemName: "1 Stick lamb",
                  price: 1.5,
                  quantity: 1
                }
              ]
            },
            {
              SelectOptionText: "Drinks",
              type: "select",
              options: [
                {
                  itemName: "Select Option",
                  price: 0,
                  quantity: 0
                },
                {
                  itemName: "7 up Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "A & W Root Beer Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Coke cola Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Coke Zero Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Diet 7up Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Pepsi Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Pepsi Diet Can",
                  price: 0,
                  quantity: 1
                }
              ]
            },
            {
              SelectOptionText: "Drinks",
              type: "select",
              options: [
                {
                  itemName: "Select Option",
                  price: 0,
                  quantity: 0
                },
                {
                  itemName: "7 up Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "A & W Root Beer Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Coke cola Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Coke Zero Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Diet 7up Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Pepsi Can",
                  price: 0,
                  quantity: 1
                },
                {
                  itemName: "Pepsi Diet Can",
                  price: 0,
                  quantity: 1
                }
              ]
            }
          ],
          AddOn: [
            { title: "Extra Tzatziki", price: 1.25 },
            { title: "Extra Pita", price: 1.25 },
            { title: "Extra Feta", price: 2.0 },
            { title: "Olives", price: 3.0 },
            { title: "Add Gyros", price: 5.0 },
            { title: "Extra chicken stick", price: 5.0 },
            { title: "Extra pork stick", price: 5.0 },
            { title: "Extra beef stick", price: 6.0 },
            { title: "Extra lamb stick", price: 7.0 },
            { title: "Extra shrimp stick", price: 5.0 }
          ]
        }
      ]
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.USERNAME:
      return {
        ...state,
        userName: action.payload
      };
    case ActionTypes.CURRENTUSER:
      return {
        ...state,
        currentUser: action.payload
      };
    case ActionTypes.ALLUSERS:
      return {
        ...state,
        users: action.payload
      };
    case ActionTypes.CHANGERECPUID:
      return {
        ...state,
        recipientID: action.payload
      };
    case ActionTypes.MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
};
