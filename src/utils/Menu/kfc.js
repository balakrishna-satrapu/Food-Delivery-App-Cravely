export const kfc = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "KFC",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "95228",
              name: "KFC",
              city: "Kakinada",
              slugs: {
                restaurant: "kfc-east-srmt-mall-test-kakinada",
                city: "kakinada",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/37f5ad39-e523-4622-825b-04b26e2ae2cc_95228.JPG",
              locality: "SRMT Mall",
              areaName: "Kakinada",
              costForTwo: "45000",
              costForTwoMessage: "₹450 for two",
              cuisines: ["Burgers", "Fast Food"],
              avgRating: 4.3,
              feeDetails: {
                restaurantId: "95228",
                fees: [{}],
              },
              parentId: "547",
              avgRatingString: "4.3",
              totalRatingsString: "12K+ ratings",
              sla: {
                restaurantId: "95228",
                deliveryTime: 22,
                minDeliveryTime: 20,
                maxDeliveryTime: 25,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 905,
                slaString: "20-25 MINS",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2026-03-03 22:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get items under 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get items under 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "kfc-east-srmt-mall-test-kakinada",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "KFC RESTAURANT,82 EAST SRMT MALL ,NEAR SURPAVARAM JUNCTION,RAMANAYYAPETTA,KAKINADA,ANDHRA PRADHESH 533005",
                },
                {
                  title: "Cuisines",
                  message: "Burgers,Fast Food",
                },
              ],
              totalRatings: 12000,
              aggregatedDiscountInfoV2: {
                header: "50% off",
                shortDescriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get items under 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "50% off",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get items under 79",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 12,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 849,
                  },
                  unlockedMessage: "Deal of the Day unlocked!",
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: "SILD",
                  nudgeTagInfo: {
                    title: "Deal of the Day",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  logoCtx: {},
                  movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/95228",
              },
              generalPurposeInfoListV2: [
                {
                  cta: {
                    info: {
                      recordings: {},
                    },
                    linkCta: {},
                  },
                },
              ],
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "Free delivery on orders above ₹199",
              },
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "16.99804406,82.2433554",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              requestContexts: ["enable_ecosaver", "99store"],
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "Extra ₹50 off",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                      offerIds: ["41e15017-3af9-496c-a398-7d3b8e34a07f"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "NO CODE REQUIRED | ABOVE ₹99",
                      offerType: "offers",
                      restId: "95228",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT 50% OFF",
                      offerTagColor: "#E46D47",
                      offerIds: ["2b71c558-9707-47ea-95d4-0631db3f6415"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "NO CODE REQUIRED",
                      description: "ON SELECT ITEMS",
                      offerType: "offers",
                      restId: "95228",
                      offerLogo: "offers/DealRush_Offer_Icon.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "NO CODE REQUIRED",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "30% OFF UPTO ₹75",
                      offerTagColor: "#E46D47",
                      offerIds: ["0ed30f85-f515-41e9-aedc-dda5a48e30d1"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE SWIGGYIT",
                      description: "ABOVE ₹249",
                      offerType: "offers",
                      restId: "95228",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE SWIGGYIT",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹300 OFF",
                      offerTag: "DEFAULT",
                      offerTagColor: "#E46D47",
                      offerIds: ["ec320cd4-f8c1-463a-be5b-7f0534e4b9cf"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT300",
                      description: "ABOVE ₹1499",
                      offerType: "offers",
                      restId: "95228",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAT300",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "BUY 2 GET 1 FREE",
                      offerTagColor: "#E46D47",
                      offerIds: ["aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE BUY2GET1",
                      description: "ON SELECT ITEMS",
                      offerType: "offers",
                      restId: "95228",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE BUY2GET1",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      offersFilter: {
                        attributes: {
                          displayText: "Offer",
                        },
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "7890604",
                          creativeId: "TopPicks/PrDiGiftHamper",
                          title: "Ultimate Savings Chicken Bucket",
                          description: "  ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "145479930",
                              name: "Ultimate Savings Chicken Bucket",
                              category: "COMBO MEALS FOR 3-4 (UP TO 31% OFF)",
                              description:
                                "Savings of 32% on signature bucket of 4pc Hot & crispy chicken, 6 Pc Wings, 4 Chicken Peri Peri Boneless strips, 2 Dips (20 gms each) & a Pepsi PET 475ml [serves 2-3 ] \n",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/15/6d46d3fd-915a-4455-baa8-c7bfb9c8650e_7ddc5025-6401-4773-a1b6-491eb4d13c91.jpg",
                              inStock: 1,
                              price: 123400,
                              finalPrice: 84900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370943",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370954",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370963",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960054",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              offerIds: [
                                "647eafc0-3fe9-4e57-8426-33c35ee18e02",
                              ],
                              parentId: "68874457",
                            },
                            analytics: {},
                            restaurant: {
                              info: {
                                dishStyle: {
                                  socialMarkerStyle: [
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                                      title: "Protein Rich",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "brand_proteinator_primary",
                                    },
                                    {
                                      socialMarkerType:
                                        "SOCIAL_MARKER_TYPE_BESTSELLER",
                                      title: "Bestseller",
                                      textStyle:
                                        "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                                      textColor: "color_swiggy_one",
                                    },
                                  ],
                                },
                              },
                            },
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513004",
                              name: "Dunked BBQ Chicken Strips - 3 Pcs",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "Three crispy chicken strips dunked in smoky, fiery Texas BBQ sauce for a bold, saucy bite.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/e0d84611-fdde-4e01-8795-0701655b43a3_923e616f-cfd7-4d29-8f9e-ba537f412f17.jpg",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "269354837",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354838",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354839",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960002",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "116460874",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513003",
                              name: "Dunked BBQ 2 Leg Pieces",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "Two juicy chicken drums coated in fiery Texas BBQ glazeùsmoky, spicy, and packed with flavour.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/8b3a471c-141a-4da8-a73d-b1c5e1b5ef44_bf3d61cf-4b43-44e8-a54c-c324a522cdfb.jpg",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "269354729",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354730",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354732",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960046",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "116460873",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513002",
                              name: "Dunked BBQ Zinger Burger",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "The classic Zinger dunked in fiery Texas BBQ sauce for a smoky, spicy twist.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/c8df85ea-a79b-4b38-8294-df9c7a4af54f_457b9769-a4e7-476d-9213-c22fbe7b146d.jpg",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "269354553",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354557",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354559",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959785",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "116460875",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513001",
                              name: "Dunked BBQ Zinger Meal",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "A hearty DUNKED feast featuring a Fiery Texas BBQ Zinger, hot wings, medium fries, and a chilled Pepsi PET",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/6/784116da-988a-4220-83d1-97922c7e6c04_9feeb1f7-0196-4514-82c2-50b74090d0a9.jpg",
                              inStock: 1,
                              price: 45900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "116460876",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "185040175",
                              name: "Gold Chicken Zinger + Reg Fries",
                              category: "FEASTIVAL MEALS (STARTING AT 259)",
                              description:
                                "Save Rs 59 on Signature Zinger Dunked in Cheese Sauce in the new Brioche Bun and Fries on the side",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/15/decb99ff-2c14-43f1-828c-dc47a38d92ce_e9e1651f-a2e6-4e2f-af45-758e662e3290.jpg",
                              inStock: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "112222683",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "187848911",
                              name: "Gold Chicken Zinger",
                              category: "FEASTIVAL MEALS (STARTING AT 259)",
                              description:
                                "Signature Zinger Dunked in Cheese Sauce in the new Brioche Bun",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/27/ff640a6c-a596-402d-8ad7-1b51affa76c5_621a669a-6e93-4c9a-b0c0-32031716e019.jpg",
                              inStock: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "112222682",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "185040174",
                              name: "Gold Chicken Zinger + Reg Fries + Pepsi PET",
                              category: "FEASTIVAL MEALS (STARTING AT 259)",
                              description:
                                "Save Rs 66 on Signature Zinger Dunked in Cheese Sauce in the new Brioche Bun with Pepsi PET 475ml and Fries on the side [Serves 1]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/15/d4a5c010-3cf9-4eaa-9f53-a9d4f1e43efe_38d619c4-fe98-42a0-b3da-44af40951bd7.jpg",
                              inStock: 1,
                              price: 39900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "112222684",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "193703490",
                              name: "CaptainÆs Chicken Bucket",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Relish 15% discount on special 11 Pc bucket û 3 Chicken Legs, 4 Peri Peri Strips & 4 Hot Wings. A perfect pick for your World Cup Feast!! [Serves 2-3]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/10/a1770166-5a13-43e2-8673-c9e5ce0e5f02_5143af32-d9d7-44b6-9ee7-8dda3d333144.jpg",
                              inStock: 1,
                              price: 67900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "110292638",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "181678522",
                              name: "Team Chicken Huddle Combo",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Flat 18% discount 5 Pc Chicken Legs & 5 Pc Hot Wings û the ultimate party-starter platter for World Cup viewing.[Serves 3û4]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/10/2b3d0fb3-8071-4a9c-85fe-6abf3141c792_e501682e-ce5d-48bf-a43f-8b3bbb6f7e81.jpg",
                              inStock: 1,
                              price: 69900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "110292642",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "178258139",
                              name: "Veggie Vibe Zinger Duo Meal",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Mega 20% off on Paneer Zinger + Veg Zinger + Large Fries + 2 Pepsi Reusable Bottles ù a perfect treat for a veggie duo. [Serves 2]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/24/8efe48b8-5f2a-40e9-a981-deae8a702de0_a0f048c7-f096-4bd4-b8e4-4ca5e17b8335.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "107894348",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "181678519",
                              name: "Opening Pair Roll Meal",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Start your cricket mania feast with 16% off on 2 Classic Chicken Rolls, Medium Popcorn & 2 Pepsi Reusable Bottles. Savings of Rs 136. [Serves 1û2]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/24/8cce3d75-20ba-4629-afc1-f5a1f29e8a19_dfd760b3-3ca3-482a-a852-b0140e014f87.jpg",
                              inStock: 1,
                              price: 54900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "110292641",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "39412862",
                              name: "Chicken Zinger Burger - Classic",
                              category: "CHICKEN BURGERS AND MEALS",
                              description:
                                "Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between",
                              imageId: "d5bc5b32dd177f5f207cad66556a572b",
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371813",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371819",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371831",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960035",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "354 ratings",
                                  ratingCountV2: "354",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53127268",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66008310",
                              name: "Chicken Zinger Burger - Tandoori",
                              category: "CHICKEN BURGERS AND MEALS",
                              description:
                                "Grab Tandoori Zinger Burger with Onions & Tangy sauce",
                              imageId: "im6rml9ioxkrjiafqyhw",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371680",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371687",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371701",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960013",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "163 ratings",
                                  ratingCountV2: "163",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53127270",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "163947721",
                              name: "2 Classic Chicken Krisper Burgers",
                              category: "CHICKEN BURGERS AND MEALS",
                              description:
                                "2 units of delicious chicken value burgers featuring delicious sauce & 2 peri peri chicken strips",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/17/6170613a-c811-4615-933d-7f0bb52a05b6_4e8b26a4-cbc5-4b4f-b945-602a3edb0bb3.jpg",
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "80357452",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "137710158",
                              name: "Spicy Zinger Burger",
                              category: "GOURMET BURGERS AND MEALS",
                              description: "Relish the Caribbean spicy zinger",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg",
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372042",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372052",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372066",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959937",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "70203434",
                              menuFilterIds: ["EATRIGHT", "NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "122150855",
                              name: "Zinger Pro Burger",
                              category: "GOURMET BURGERS AND MEALS",
                              description:
                                "Premium burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/17/63e333fd-caa9-4032-9f1c-1799f26d5a45_2d9e58d4-6ad7-4acc-b58c-19f3f78acba9.jpg",
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371960",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371971",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371981",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959762",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56869955",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "172144153",
                              name: "Gold Edition - Veg Zinger Burger",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "Our Signature Veg Zinger Dunked in Cheese Sauce in the new Brioche Bun to get your tastebuds tingling",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/6/16/cb6e9c4a-4de6-4cb4-b549-35db959bf077_e7a57bea-8111-4037-8963-7275075500d2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372148",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372154",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372160",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959666",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "103405120",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "176204448",
                              name: "Chatpata Chana Veg Burger - 2 pc",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "Try New 2 units of Delicious Channa Burger with a unique Indian Chatpata Twist",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/6/10/8f55edec-e16c-4f68-985d-14a42e617527_f914dbc7-0a64-45c6-8a47-d603467a8776.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 29900,
                              finalPrice: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "07064ea6-1e7a-4225-9ba2-4d7153453c4e",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "107996512",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "137710161",
                              name: "Paneer Zinger Burger",
                              category: "VEG BURGERS AND MEALS",
                              description: "Relish the Indian paneer zinger",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/4/56c5c073-4ac4-4c43-990e-16a558cf3877_87868b65-5a9c-4dd4-8f2e-e47ad6ee57d2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371876",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371883",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533390",
                                      name: "Indian Spicy Veg Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371893",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959821",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657650",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121921508",
                              name: "Veg Longer Burger - 2pc",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "The really long burger with Veg Patty, Onion, Lettuce and two sauces",
                              imageId: "866ef0fcc37944827cf419f6d9783d97",
                              inStock: 1,
                              isVeg: 1,
                              price: 27900,
                              finalPrice: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371751",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371759",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533390",
                                      name: "Indian Spicy Veg Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371769",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959885",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "8d7f23c6-c3f1-489f-989d-c64edf87e7b9",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "107996514",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      subtitleSuffix: {},
                      categoryId: "-1",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "NEWLY LAUNCHED DUNKED RANGE",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513004",
                              name: "Dunked BBQ Chicken Strips - 3 Pcs",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "Three crispy chicken strips dunked in smoky, fiery Texas BBQ sauce for a bold, saucy bite.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/e0d84611-fdde-4e01-8795-0701655b43a3_923e616f-cfd7-4d29-8f9e-ba537f412f17.jpg",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "269354837",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354838",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354839",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960002",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "116460874",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513003",
                              name: "Dunked BBQ 2 Leg Pieces",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "Two juicy chicken drums coated in fiery Texas BBQ glazeùsmoky, spicy, and packed with flavour.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/8b3a471c-141a-4da8-a73d-b1c5e1b5ef44_bf3d61cf-4b43-44e8-a54c-c324a522cdfb.jpg",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "269354729",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354730",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354732",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960046",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "116460873",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513002",
                              name: "Dunked BBQ Zinger Burger",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "The classic Zinger dunked in fiery Texas BBQ sauce for a smoky, spicy twist.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/5/c8df85ea-a79b-4b38-8294-df9c7a4af54f_457b9769-a4e7-476d-9213-c22fbe7b146d.jpg",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "269354553",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354557",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "269354559",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959785",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "116460875",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "191513001",
                              name: "Dunked BBQ Zinger Meal",
                              category: "NEWLY LAUNCHED DUNKED RANGE",
                              description:
                                "A hearty DUNKED feast featuring a Fiery Texas BBQ Zinger, hot wings, medium fries, and a chilled Pepsi PET",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/6/784116da-988a-4220-83d1-97922c7e6c04_9feeb1f7-0196-4514-82c2-50b74090d0a9.jpg",
                              inStock: 1,
                              price: 45900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "116460876",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/1/5/e0d84611-fdde-4e01-8795-0701655b43a3_923e616f-cfd7-4d29-8f9e-ba537f412f17.jpg",
                      categoryId: "70830871",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "FEASTIVAL MEALS (STARTING AT 259)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "185040175",
                              name: "Gold Chicken Zinger + Reg Fries",
                              category: "FEASTIVAL MEALS (STARTING AT 259)",
                              description:
                                "Save Rs 59 on Signature Zinger Dunked in Cheese Sauce in the new Brioche Bun and Fries on the side",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/15/decb99ff-2c14-43f1-828c-dc47a38d92ce_e9e1651f-a2e6-4e2f-af45-758e662e3290.jpg",
                              inStock: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "112222683",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "187848911",
                              name: "Gold Chicken Zinger",
                              category: "FEASTIVAL MEALS (STARTING AT 259)",
                              description:
                                "Signature Zinger Dunked in Cheese Sauce in the new Brioche Bun",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/27/ff640a6c-a596-402d-8ad7-1b51affa76c5_621a669a-6e93-4c9a-b0c0-32031716e019.jpg",
                              inStock: 1,
                              price: 29900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "112222682",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "185040174",
                              name: "Gold Chicken Zinger + Reg Fries + Pepsi PET",
                              category: "FEASTIVAL MEALS (STARTING AT 259)",
                              description:
                                "Save Rs 66 on Signature Zinger Dunked in Cheese Sauce in the new Brioche Bun with Pepsi PET 475ml and Fries on the side [Serves 1]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/15/d4a5c010-3cf9-4eaa-9f53-a9d4f1e43efe_38d619c4-fe98-42a0-b3da-44af40951bd7.jpg",
                              inStock: 1,
                              price: 39900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "112222684",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/10/15/decb99ff-2c14-43f1-828c-dc47a38d92ce_e9e1651f-a2e6-4e2f-af45-758e662e3290.jpg",
                      categoryId: "69753137",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "MATCH DAY COMBOS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "193703490",
                              name: "CaptainÆs Chicken Bucket",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Relish 15% discount on special 11 Pc bucket û 3 Chicken Legs, 4 Peri Peri Strips & 4 Hot Wings. A perfect pick for your World Cup Feast!! [Serves 2-3]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/10/a1770166-5a13-43e2-8673-c9e5ce0e5f02_5143af32-d9d7-44b6-9ee7-8dda3d333144.jpg",
                              inStock: 1,
                              price: 67900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "110292638",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "181678522",
                              name: "Team Chicken Huddle Combo",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Flat 18% discount 5 Pc Chicken Legs & 5 Pc Hot Wings û the ultimate party-starter platter for World Cup viewing.[Serves 3û4]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/10/2b3d0fb3-8071-4a9c-85fe-6abf3141c792_e501682e-ce5d-48bf-a43f-8b3bbb6f7e81.jpg",
                              inStock: 1,
                              price: 69900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "110292642",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "178258139",
                              name: "Veggie Vibe Zinger Duo Meal",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Mega 20% off on Paneer Zinger + Veg Zinger + Large Fries + 2 Pepsi Reusable Bottles ù a perfect treat for a veggie duo. [Serves 2]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/24/8efe48b8-5f2a-40e9-a981-deae8a702de0_a0f048c7-f096-4bd4-b8e4-4ca5e17b8335.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 59900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "107894348",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "181678519",
                              name: "Opening Pair Roll Meal",
                              category: "MATCH DAY COMBOS",
                              description:
                                "Start your cricket mania feast with 16% off on 2 Classic Chicken Rolls, Medium Popcorn & 2 Pepsi Reusable Bottles. Savings of Rs 136. [Serves 1û2]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/24/8cce3d75-20ba-4629-afc1-f5a1f29e8a19_dfd760b3-3ca3-482a-a852-b0140e014f87.jpg",
                              inStock: 1,
                              price: 54900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "110292641",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/9/10/a1770166-5a13-43e2-8673-c9e5ce0e5f02_5143af32-d9d7-44b6-9ee7-8dda3d333144.jpg",
                      categoryId: "71813654",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "CHICKEN BURGERS AND MEALS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "39412862",
                              name: "Chicken Zinger Burger - Classic",
                              category: "CHICKEN BURGERS AND MEALS",
                              description:
                                "Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between",
                              imageId: "d5bc5b32dd177f5f207cad66556a572b",
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371813",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371819",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371831",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960035",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "354 ratings",
                                  ratingCountV2: "354",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53127268",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66008310",
                              name: "Chicken Zinger Burger - Tandoori",
                              category: "CHICKEN BURGERS AND MEALS",
                              description:
                                "Grab Tandoori Zinger Burger with Onions & Tangy sauce",
                              imageId: "im6rml9ioxkrjiafqyhw",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371680",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371687",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371701",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960013",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "163 ratings",
                                  ratingCountV2: "163",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53127270",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "163947721",
                              name: "2 Classic Chicken Krisper Burgers",
                              category: "CHICKEN BURGERS AND MEALS",
                              description:
                                "2 units of delicious chicken value burgers featuring delicious sauce & 2 peri peri chicken strips",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/17/6170613a-c811-4615-933d-7f0bb52a05b6_4e8b26a4-cbc5-4b4f-b945-602a3edb0bb3.jpg",
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "80357452",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "d5bc5b32dd177f5f207cad66556a572b",
                      categoryId: "70169699",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "GOURMET BURGERS AND MEALS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "137710158",
                              name: "Spicy Zinger Burger",
                              category: "GOURMET BURGERS AND MEALS",
                              description: "Relish the Caribbean spicy zinger",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg",
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372042",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372052",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372066",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959937",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "70203434",
                              menuFilterIds: ["EATRIGHT", "NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "122150855",
                              name: "Zinger Pro Burger",
                              category: "GOURMET BURGERS AND MEALS",
                              description:
                                "Premium burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/17/63e333fd-caa9-4032-9f1c-1799f26d5a45_2d9e58d4-6ad7-4acc-b58c-19f3f78acba9.jpg",
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371960",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371971",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533386",
                                      name: "Smoky Red Grilled Chicken - 1 pc",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371981",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959762",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56869955",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg",
                      categoryId: "70169698",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "VEG BURGERS AND MEALS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "172144153",
                              name: "Gold Edition - Veg Zinger Burger",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "Our Signature Veg Zinger Dunked in Cheese Sauce in the new Brioche Bun to get your tastebuds tingling",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/6/16/cb6e9c4a-4de6-4cb4-b549-35db959bf077_e7a57bea-8111-4037-8963-7275075500d2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372148",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372154",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372160",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959666",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "103405120",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "176204448",
                              name: "Chatpata Chana Veg Burger - 2 pc",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "Try New 2 units of Delicious Channa Burger with a unique Indian Chatpata Twist",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/6/10/8f55edec-e16c-4f68-985d-14a42e617527_f914dbc7-0a64-45c6-8a47-d603467a8776.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 29900,
                              finalPrice: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "07064ea6-1e7a-4225-9ba2-4d7153453c4e",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "107996512",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "137710161",
                              name: "Paneer Zinger Burger",
                              category: "VEG BURGERS AND MEALS",
                              description: "Relish the Indian paneer zinger",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/4/56c5c073-4ac4-4c43-990e-16a558cf3877_87868b65-5a9c-4dd4-8f2e-e47ad6ee57d2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371876",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371883",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533390",
                                      name: "Indian Spicy Veg Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371893",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959821",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657650",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121921508",
                              name: "Veg Longer Burger - 2pc",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "The really long burger with Veg Patty, Onion, Lettuce and two sauces",
                              imageId: "866ef0fcc37944827cf419f6d9783d97",
                              inStock: 1,
                              isVeg: 1,
                              price: 27900,
                              finalPrice: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371751",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371759",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533390",
                                      name: "Indian Spicy Veg Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371769",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959885",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "8d7f23c6-c3f1-489f-989d-c64edf87e7b9",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "107996514",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66008306",
                              name: "Veg Zinger Burger",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "The OG Veg Zinger- Burgered to perfection",
                              imageId: "a403a55dc5b74cc6acfcfa755f30c165",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371613",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371622",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533390",
                                      name: "Indian Spicy Veg Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371628",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960109",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "42 ratings",
                                  ratingCountV2: "42",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657962",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66008313",
                              name: "Veg Krisper Burgers - 2pc",
                              category: "VEG BURGERS AND MEALS",
                              description:
                                "2 delicious veg value burgers - at a deal price",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/8/10aa0923-fbec-4185-996d-08d1f08f4c14_6e3d80d3-6ef1-4c46-b453-ba3ed706bfb9.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 23900,
                              finalPrice: 11900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371537",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371542",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533390",
                                      name: "Indian Spicy Veg Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371549",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959642",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "5d0f85b1-9bf8-4dbc-9144-fd78d4b2f9be",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "107996513",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/6/16/cb6e9c4a-4de6-4cb4-b549-35db959bf077_e7a57bea-8111-4037-8963-7275075500d2.jpg",
                      categoryId: "70169697",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "ROLLS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "145439031",
                              name: "Korean Tangy Chicken Roll",
                              category: "ROLLS",
                              description:
                                "Delicious new roll featuring tangy Korean kimchi, vegetables and crunchy chicken strips",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/25/2b5fdf7d-ee02-4871-8a5d-e766dc62833a_ae001a35-cbdc-4524-9868-b192251fda2b.jpg",
                              inStock: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372618",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372625",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372636",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960127",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "85985881",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "145439030",
                              name: "Thai Spicy Chicken Roll",
                              category: "ROLLS",
                              description:
                                "Fresh burst of Thai flavours and sauces in a flaky paratha, chicken strips and vegetables",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/25/8de08e92-01c9-4325-a98e-2c069b933f50_b8af1bba-0784-4271-8243-11e0669e5af6.jpg",
                              inStock: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372540",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372550",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372560",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959695",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "85985884",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "145439029",
                              name: "Indian Tandoori Chicken Roll",
                              category: "ROLLS",
                              description:
                                "Flavorful roll made with flaky lachha paratha, perfectly fried chicken strips in rich and creamy tandoori sauce",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/9/4c966f38-c191-4d0e-a54c-c70b832e4de1_69ee13c1-f267-4385-ab98-6efbc811de33.jpg",
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372473",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372482",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372490",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959770",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "41 ratings",
                                  ratingCountV2: "41",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "85985879",
                              menuFilterIds: ["EATRIGHT", "NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "145439028",
                              name: "Indian Spicy Veg Roll",
                              category: "ROLLS",
                              description:
                                "Veg special spicy indian sauce and veggie roll",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/25/bf247176-6142-4eea-bd04-d0acf186b6f0_f5537093-5d29-4b12-9c71-7935995f15b8.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372386",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372393",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372400",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960082",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "85985878",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "113953823",
                              name: "Classic Chicken Roll",
                              category: "ROLLS",
                              description:
                                "Street Syle Roll with Layerful parantha, single chicken strip, onions and two spicy sauce",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/12/98809656-a56f-400b-a5f4-85da2c373728_1f87888c-7eeb-4dfe-b233-0588c8c7a99b.jpg",
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372311",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372318",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533379",
                                      name: "Chicken Zinger Burger - Tandoori",
                                      price: 24900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372325",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960101",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "35 ratings",
                                  ratingCountV2: "35",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65630981",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "113953820",
                              name: "Double Chicken Roll",
                              category: "ROLLS",
                              description:
                                "Double fun with double chicken strip filling, layerful parantha onions and two spicy sauce",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/12/c51d83f6-4c85-477a-9262-204092ab3e91_d5f20a0c-8b5d-49a5-a178-ba8745b59ff1.jpg",
                              inStock: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261372222",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372230",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261372238",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959863",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "50 ratings",
                                  ratingCountV2: "50",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657292",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/7/25/2b5fdf7d-ee02-4871-8a5d-e766dc62833a_ae001a35-cbdc-4524-9868-b192251fda2b.jpg",
                      categoryId: "69753135",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "FESTIVE PARTY BUCKET",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190058887",
                              name: "Big Feast Bucket - 8 HC, 2 Popcorn & Dips",
                              category: "FESTIVE PARTY BUCKET",
                              description:
                                "A feast made for sharing! 8 Hot & Crispy Chicken, 2 Large chicken popcorn & 4 signature dips ù the ultimate indulgence.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/6/f57bbfe9-8cc3-4419-9e72-f78da50d94f3_f342799a-e4c5-4518-8757-78b19851cfd2.jpg",
                              inStock: 1,
                              price: 156300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "113020464",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195814931",
                              name: "Classic 12-Piece HC Bucket",
                              category: "FESTIVE PARTY BUCKET",
                              description:
                                "Our iconic Hot & Crispy chicken, cooked golden brown and packed with flavour ù 12 pieces of pure joy.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/17/229b62e8-c942-4c65-8a9b-627b152b3896_b15d40cb-056d-42e8-b364-e1eb0aff2c65.jpg",
                              inStock: 1,
                              price: 142800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "117899936",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190058884",
                              name: "10 HC Chicken & 10 Strips Party Bucket",
                              category: "FESTIVE PARTY BUCKET",
                              description:
                                "Double the fun! Mix of 10 juicy Hot & Crispy chicken and 10 tender chicken strips with 4 dips on the side.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/24/4e1da786-2b93-46c4-8ebe-9e89b07ef345_87b3d224-b055-494d-9023-5f44684f81f1.jpg",
                              inStock: 1,
                              price: 190100,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "113020463",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190058881",
                              name: "Chicken Lovers Mega Bucket - 10 HC & 10 Leg pieces",
                              category: "FESTIVE PARTY BUCKET",
                              description:
                                "For the real chicken lovers ù 10 leg pieces & 10 Hot and Crispy chicken, all in one massive bucket.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/24/093f399c-9370-4aeb-ae42-71703c5aa30d_a0e06598-9de7-442a-bb47-72c0b5687e41.jpg",
                              inStock: 1,
                              price: 234000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "113020465",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190058878",
                              name: "Zinger Squad Meal - 4 Zingers, Fries and Pepsi",
                              category: "FESTIVE PARTY BUCKET",
                              description:
                                "Perfect for your squad ù 4 Classic Zingers, 4 med fries & 2 chilled Pepsi pet bottles",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/24/dae274cb-0ef2-409e-a936-7cb6665773f4_f673514d-18f7-4db1-8f7d-34e1311becc0.jpg",
                              inStock: 1,
                              price: 134600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "113020467",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "190058876",
                              name: "Classic Zinger Pack of 6",
                              category: "FESTIVE PARTY BUCKET",
                              description:
                                "All the crunch, spice & flavour of the legendary Classic Zinger ù times six!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/24/361d78f5-8aef-4c53-95dd-42cae885c563_746f9da9-56e6-43eb-ae65-5ed350f46a04.jpg",
                              inStock: 1,
                              price: 125400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "113020466",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/1/6/f57bbfe9-8cc3-4419-9e72-f78da50d94f3_f342799a-e4c5-4518-8757-78b19851cfd2.jpg",
                      categoryId: "70169696",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "ALL DAY LUNCH SPECIAL MEAL BOX (SAVE RS 115)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "137433177",
                              name: "Classic Zinger Box",
                              category:
                                "ALL DAY LUNCH SPECIAL MEAL BOX (SAVE RS 115)",
                              description:
                                "All new special Zinger Box with savings of Rs 86 on Classic American Zinger Burger, 2 Pc Peri Peri Strips, Medium Fries & a Pepsi PET 475ml [Serves 1]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/5/20/435ff114-9cc0-43bc-af9f-efecd249f098_83fac3c7-9c53-4e9f-85b3-37724f647539.jpg",
                              inStock: 1,
                              price: 39900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371476",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371482",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371488",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960025",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657248",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/5/20/435ff114-9cc0-43bc-af9f-efecd249f098_83fac3c7-9c53-4e9f-85b3-37724f647539.jpg",
                      categoryId: "69753134",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title:
                        "PERI PERI CHICKEN STRIPS & LEG PC (UP TO 25% OFF)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "124525904",
                              name: "Peri Peri Chicken 5 Leg Piece Bucket",
                              category:
                                "PERI PERI CHICKEN STRIPS & LEG PC (UP TO 25% OFF)",
                              description:
                                "Deal Bucket of 5 Spicy Peri Peri Leg Pieces [serves 2]",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/2/9/3351121e-2689-4b00-bc74-464301e587a5_5a78302c-4c7c-40e7-a5f9-5ce4f7b64348.jpg",
                              inStock: 1,
                              price: 59900,
                              finalPrice: 44900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371416",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371422",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371426",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959851",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "88 ratings",
                                  ratingCountV2: "88",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "3f459297-0167-48ba-b003-c2f046ed0e79",
                              ],
                              parentId: "96153573",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99454094",
                              name: "Peri Peri Chicken Strips - 6 Pc",
                              category:
                                "PERI PERI CHICKEN STRIPS & LEG PC (UP TO 25% OFF)",
                              description:
                                "Signature Chicken Strips sprinkled with Peri Peri- 6 Peri Peri Strips- Ultimate Snack!",
                              imageId: "qsmfyjef2hbu05emuu2c",
                              inStock: 1,
                              price: 34900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261371359",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371369",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261371379",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959707",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "117 ratings",
                                  ratingCountV2: "117",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "65480598",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/2/9/3351121e-2689-4b00-bc74-464301e587a5_5a78302c-4c7c-40e7-a5f9-5ce4f7b64348.jpg",
                      categoryId: "69753133",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "181067021",
                              name: "Peri Peri Grand Feast",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "2 Peri Peri Leg + 4 Chicken Strip + 4 Wings + 1 Medium Popcorn + 1 Pepsi Pet + 2 Tandoori DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/26/4fb2deec-954c-4714-ac2e-ebc50350714f_8ee0def8-b084-4103-84ba-245ac960b8f6.jpg",
                              inStock: 1,
                              price: 129800,
                              finalPrice: 64900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "50% OFF",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "CouponlessSild",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "19 ratings",
                                  ratingCountV2: "19",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "2b71c558-9707-47ea-95d4-0631db3f6415",
                              ],
                              parentId: "109887624",
                              offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "182686380",
                              name: "Jumbo Zinger Meal",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "2 Classic Zinger + 2 Pepsi Resuable + 4 Peri Peri Strip + Large Fries+2 Tandoori DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/24/53451ecd-2528-456f-a621-43d767ac3d1e_48fa9871-41b1-487e-ad8e-b58a140d08ca.jpg",
                              inStock: 1,
                              price: 139800,
                              finalPrice: 69900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "50% OFF",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "CouponlessSild",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "2b71c558-9707-47ea-95d4-0631db3f6415",
                              ],
                              parentId: "110980018",
                              offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "182686379",
                              name: "Thrice as Nice",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "3 Hot and Crispy + 3 Chicken Strip + 3 Wings + Large Chicken Popcorn",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/24/c85e26ed-57d7-45f9-92cf-20a6dfd53725_51e739a3-bfe4-4c11-9b72-61aa83879813.jpg",
                              inStock: 1,
                              price: 129800,
                              finalPrice: 64900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "50% OFF",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "CouponlessSild",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "2b71c558-9707-47ea-95d4-0631db3f6415",
                              ],
                              parentId: "110980019",
                              offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "182686378",
                              name: "Mad Duo Meal",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "2 Peri Peri Leg + 4 Chicken Wings + Large Chicken Popcorn+Tandoori DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/24/f8eaf25a-f309-49db-bd2e-2c1dc1c97889_465aa16e-2dfc-496f-bed6-20571978d83e.jpg",
                              inStock: 1,
                              price: 99800,
                              finalPrice: 49900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "50% OFF",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "CouponlessSild",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "2b71c558-9707-47ea-95d4-0631db3f6415",
                              ],
                              parentId: "110967033",
                              offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "182686377",
                              name: "Pure Veggie Bliss",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "Veg Zinger with Cheese + Medium Fries + Pepsi Resuable + Choco Mud Pie + DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/24/62f28192-5433-4038-b685-9e6e4099ad6f_a5981c0f-e031-45ea-b7b7-98c5eb50777d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 79800,
                              finalPrice: 39900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "50% OFF",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "CouponlessSild",
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "2b71c558-9707-47ea-95d4-0631db3f6415",
                              ],
                              parentId: "110967034",
                              offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "181067017",
                              name: "Signature Leg & Wing Box",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "2 leg pcs + 4 pcs wings + 1 Tandoori DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/1/d0480eaa-7c37-4198-ae43-d0167a77a1af_e7f843ed-9f18-426d-ad29-4b41935e95c4.jpg",
                              inStock: 1,
                              price: 55800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "109887626",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "182686376",
                              name: "Full-on Bowl Meal",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "Popcorn Chicken Rice Bowl + 1 Peri Peri Leg + 2 Chicken Wings + Pepsi Resuable + Tandoori DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/24/068f54a8-f116-4cd0-a124-048686beb46f_6c001f7d-cdfe-4e17-9105-2b089e1fed40.jpg",
                              inStock: 1,
                              price: 79800,
                              finalPrice: 39900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "50% OFF",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "CouponlessSild",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "2b71c558-9707-47ea-95d4-0631db3f6415",
                              ],
                              parentId: "110980017",
                              offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194401916",
                              name: "Fiery Indulgent Box",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "1 Peri Peri Leg + 2 Chicken Strip + 2 Wings + 1 Tandoori DIP",
                              inStock: 1,
                              price: 45800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "118518106",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194401914",
                              name: "Signature Wing & Leg Box",
                              category:
                                "EPIC VALUE MEALS FOR 1-2 (UP TO 22% OFF)",
                              description:
                                "2 leg pcs + 4 pcs wings + 1 Tandoori DIP",
                              inStock: 1,
                              price: 55800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "118518108",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/9/26/4fb2deec-954c-4714-ac2e-ebc50350714f_8ee0def8-b084-4103-84ba-245ac960b8f6.jpg",
                      categoryId: "69753132",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "COMBO MEALS FOR 3-4 (UP TO 31% OFF)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "145479930",
                              name: "Ultimate Savings Chicken Bucket",
                              category: "COMBO MEALS FOR 3-4 (UP TO 31% OFF)",
                              description:
                                "Savings of 32% on signature bucket of 4pc Hot & crispy chicken, 6 Pc Wings, 4 Chicken Peri Peri Boneless strips, 2 Dips (20 gms each) & a Pepsi PET 475ml [serves 2-3 ] \n",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/15/6d46d3fd-915a-4455-baa8-c7bfb9c8650e_7ddc5025-6401-4773-a1b6-491eb4d13c91.jpg",
                              inStock: 1,
                              price: 123400,
                              finalPrice: 84900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370943",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370954",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370963",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960054",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "526 ratings",
                                  ratingCountV2: "526",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "647eafc0-3fe9-4e57-8426-33c35ee18e02",
                              ],
                              parentId: "68874457",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117825878",
                              name: "All in One Chicken Bucket",
                              category: "COMBO MEALS FOR 3-4 (UP TO 31% OFF)",
                              description:
                                "1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/5/15/514ac4ef-0ff9-4e78-b118-10ba644d54bb_5e50748c-fc45-4d11-be03-ace7d41abb10.jpg",
                              inStock: 1,
                              price: 78400,
                              finalPrice: 64900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "ad7308cb-31ea-451b-bc64-e94e1da79bae",
                              ],
                              parentId: "68874452",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43616330",
                              name: "Big 8 - Chicken Bucket",
                              category: "COMBO MEALS FOR 3-4 (UP TO 31% OFF)",
                              description:
                                "2pc Hot & Crispy, 2 Strips & 4pc Smoky Red chicken",
                              imageId: "yiozpo7vfq8t5s4hns1v",
                              inStock: 1,
                              price: 96700,
                              finalPrice: 79900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370839",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370851",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370861",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960136",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "138 ratings",
                                  ratingCountV2: "138",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "0ff93fe6-0bc9-4d6f-932b-5731e2075210",
                              ],
                              parentId: "55324928",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/8/15/6d46d3fd-915a-4455-baa8-c7bfb9c8650e_7ddc5025-6401-4773-a1b6-491eb4d13c91.jpg",
                      categoryId: "69753131",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "RICE BOWLZ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129528935",
                              name: "Classic Chicken Rice Bowl - Biryani Style",
                              category: "RICE BOWLZ",
                              description:
                                "Rice Bowlz Attack!- Grab this aromatic Rice Bowlz rice with 1 piece Hot & Cripsy & gravy",
                              imageId: "a74de1a2b59bf60d616d458b7e78bd1a",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370753",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370762",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370772",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959989",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "103616858",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129528936",
                              name: "Smoky Red Chicken Rice Bowl - Biryani Style",
                              category: "RICE BOWLZ",
                              description:
                                "Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with smoky grilled chicken & gravy!",
                              imageId: "3e243b6fbc280b8891643b1d3b7836f6",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370647",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370662",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370681",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959803",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "103616861",
                              menuFilterIds: ["EATRIGHT", "NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129528937",
                              name: "Popcorn Chicken Rice Bowl - Biryani Style",
                              category: "RICE BOWLZ",
                              description:
                                "Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with chicken popcorn & gravy!",
                              imageId: "9e57b3b9478a4a0b114b8ba4e1b5be89",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370553",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370563",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370573",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959626",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.1",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "103616860",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129528938",
                              name: "Veg Rice Bowl - Biryani Style",
                              category: "RICE BOWLZ",
                              description:
                                "Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with gravy now!",
                              imageId: "b55628a57b4ae927013617605d4db6e6",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370463",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370470",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959904",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "103616862",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "129528940",
                              name: "Plain Rice Bowlz",
                              category: "RICE BOWLZ",
                              description:
                                "Aromatic Plain Rice- perfect go along to make a wholesome meal!",
                              imageId: "38c021b7322ea7451ad6668b1e0706be",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370383",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370392",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370403",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959751",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "75280051",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "a74de1a2b59bf60d616d458b7e78bd1a",
                      categoryId: "69753130",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "HOT & CRISPY CHICKEN & WINGS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220792",
                              name: "Hot & Crispy Chicken - 8 pcs",
                              category: "HOT & CRISPY CHICKEN & WINGS",
                              description: "8 pc Hot & Cripsy",
                              imageId: "uspplszjphtrwqn1alef",
                              inStock: 1,
                              price: 111200,
                              finalPrice: 84900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370318",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370329",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370340",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959717",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "78 ratings",
                                  ratingCountV2: "78",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "647eafc0-3fe9-4e57-8426-33c35ee18e02",
                              ],
                              parentId: "54462668",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220787",
                              name: "Hot & Crispy Chicken - 6 pcs",
                              category: "HOT & CRISPY CHICKEN & WINGS",
                              description:
                                "6 pc signature Hot & crispy chicken",
                              imageId: "ygv0a2rzffhnfgbfajz4",
                              inStock: 1,
                              price: 83400,
                              finalPrice: 69900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370258",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370267",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370273",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959949",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "101 ratings",
                                  ratingCountV2: "101",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "8728848b-883e-4fa1-8c0b-e0deedb568ea",
                              ],
                              parentId: "69513177",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220823",
                              name: "Hot & Crispy Chicken - 4 pcs",
                              category: "HOT & CRISPY CHICKEN & WINGS",
                              description:
                                "4 pcs of signature Hot & crispy chicken at a deal price",
                              imageId: "m7q813n17jh4nrhtt7ss",
                              inStock: 1,
                              price: 47900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370187",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370199",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370205",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960092",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "138 ratings",
                                  ratingCountV2: "138",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54462666",
                              menuFilterIds: ["NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220822",
                              name: "Hot & Crispy Chicken- 2 pcs",
                              category: "HOT & CRISPY CHICKEN & WINGS",
                              description: "Get 2 piece Hot & Crispy Chicken",
                              imageId: "n8ictcqllyfu5ojx3oci",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370120",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370128",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370132",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959980",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "149 ratings",
                                  ratingCountV2: "149",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "28657429",
                              menuFilterIds: ["EATRIGHT", "NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220840",
                              name: "Hot Chicken Wings - 4 pcs",
                              category: "HOT & CRISPY CHICKEN & WINGS",
                              description:
                                "Snack on the 4 pc Chicken Hot Wings Snack with your KFC Meal",
                              imageId: "ubpofq5tlhdgwh2lzo8d",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261370053",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370062",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370077",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959927",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "653 ratings",
                                  ratingCountV2: "653",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "69513176",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220829",
                              name: "Hot & Crispy Chicken - 1 pc",
                              category: "HOT & CRISPY CHICKEN & WINGS",
                              description:
                                "Get the 1piece Hot & Crispy Chicken",
                              imageId: "scl1wyh0yg3saadaakbk",
                              inStock: 1,
                              price: 12900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369989",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369995",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261370010",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960070",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "60 ratings",
                                  ratingCountV2: "60",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "28657428",
                              menuFilterIds: ["EATRIGHT", "NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "uspplszjphtrwqn1alef",
                      categoryId: "69753129",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "BONELESS CHICKEN POPCORN",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "26825009",
                              name: "Chicken Popcorn - Large",
                              category: "BONELESS CHICKEN POPCORN",
                              description:
                                "Large Pack of Chicken Popcorn seasoned with the Chili Lime flavours",
                              imageId: "xwunbsyx5mjosb47pgpi",
                              inStock: 1,
                              price: 27900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369883",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369892",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369902",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959813",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "1141 ratings",
                                  ratingCountV2: "1.1K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657120",
                              menuFilterIds: [
                                "bestseller",
                                "NONVEG",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "58107695",
                              name: "Chicken Popcorn - Medium",
                              category: "BONELESS CHICKEN POPCORN",
                              description:
                                "Medium Pack of Chicken Popcorn seasoned with the Chili Lime flavours",
                              imageId: "vq4hhfaphd4fam2kieqq",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369774",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369782",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369794",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960146",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "672 ratings",
                                  ratingCountV2: "672",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "54319289",
                              menuFilterIds: [
                                "EATRIGHT",
                                "bestseller",
                                "NONVEG",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "58107697",
                              name: "Chicken Popcorn - Regular",
                              category: "BONELESS CHICKEN POPCORN",
                              description:
                                "Regular Pack of Chicken Popcorn seasoned with the Chili Lime flavours",
                              imageId: "xzzsjnmakrosu2i5qatn",
                              inStock: 1,
                              price: 13900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369686",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369696",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369703",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277960118",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "241 ratings",
                                  ratingCountV2: "241",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              offerIds: [
                                "08238545-1445-41fc-8af3-b7861a38ea71",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "54462654",
                              menuFilterIds: [
                                "EATRIGHT",
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "xwunbsyx5mjosb47pgpi",
                      categoryId: "69753128",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "GRILLED SMOKY RED CHICKEN",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "67884648",
                              name: "Smoky Red Grilled Chicken - 5 pc",
                              category: "GRILLED SMOKY RED CHICKEN",
                              description:
                                "Grab 5 pc Smoky Red Chicken - grilled to perfection",
                              imageId: "ewi33xnqju9f6ezzwhbk",
                              inStock: 1,
                              price: 69500,
                              finalPrice: 58900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369592",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369602",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369611",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959839",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "50 ratings",
                                  ratingCountV2: "50",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "370ef632-8c9f-4cc7-8eff-3f834dd22bd0",
                              ],
                              parentId: "56426960",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220850",
                              name: "Smoky Red Grilled Chicken - 2 pc",
                              category: "GRILLED SMOKY RED CHICKEN",
                              description:
                                "Savour 2 pieces of KFC Smoky Red Chicken- Hot Grilled Chicken Leg Piece!",
                              imageId: "e2gbhuf1hprednohf5yt",
                              inStock: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369500",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369513",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369524",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959734",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "59 ratings",
                                  ratingCountV2: "59",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "63453078",
                              menuFilterIds: ["EATRIGHT", "NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220845",
                              name: "Smoky Red Grilled Chicken - 1 pc",
                              category: "GRILLED SMOKY RED CHICKEN",
                              description: "1pc smoky grilled chicken",
                              imageId: "wfmeqvdcmqmv1wpshbqh",
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369405",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369419",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533384",
                                      name: "Peri Peri Chicken Strips - 3 pc",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369429",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959875",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "56426958",
                              menuFilterIds: ["EATRIGHT", "NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "ewi33xnqju9f6ezzwhbk",
                      categoryId: "69753127",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "SIDES AND DIPS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "172144152",
                              name: "Gold Edition - Regular Fries",
                              category: "SIDES AND DIPS",
                              description:
                                "Enjoy our Regular Fries Dipped in Cheesy Sauce",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/6/14/6aea8e43-f8d0-401b-80fe-b1c4971b79bc_65aa8eb0-9be8-476f-8b7c-86ae59de4bae.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.2",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "103405119",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "99454049",
                              name: "Peri Peri Chicken Strips - 3 pc",
                              category: "SIDES AND DIPS",
                              description:
                                "3 Pieces Spicy Peri Peri chicken boneless strips",
                              imageId: "fgtsqzqqxxtzxu0p0acw",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369315",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533395",
                                      name: "Chicken Popcorn - Regular",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533398",
                                      name: "Chicken Popcorn - Medium",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533397",
                                      name: "French Fries - Medium",
                                      price: 12900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533392",
                                      name: "French Fries - Large",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369322",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533393",
                                      name: "Indian Tandoori Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533399",
                                      name: "Spicy Zinger Burger",
                                      price: 25900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533401",
                                      name: "Chicken Zinger Burger - Classic",
                                      price: 23900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533396",
                                      name: "Thai Spicy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533391",
                                      name: "Korean Tangy Chicken Roll",
                                      price: 15900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533394",
                                      name: "Classic Chicken Roll",
                                      price: 13900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533383",
                                      name: "Hot Chicken Wings - 4 pcs",
                                      price: 19900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533387",
                                      name: "Hot & Crispy Chicken - 1 pc",
                                      price: 12900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369334",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959684",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "159 ratings",
                                  ratingCountV2: "159",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId: "merch_bau/High%20Protein%201_1.png",
                                },
                              ],
                              parentId: "64022827",
                              menuFilterIds: ["EATRIGHT", "NONVEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63220844",
                              name: "2 pc Veg Patty",
                              category: "SIDES AND DIPS",
                              description: "Delicious & Crispy 2 pc Veg patty ",
                              imageId: "v9thnyukkkv47ifzmxfa",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28656814",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62923823",
                              name: "French Fries - Large",
                              category: "SIDES AND DIPS",
                              description: "Large size Fries",
                              imageId: "r93ljtqjnlpn2xr24dln",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369237",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369244",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369250",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959969",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "242 ratings",
                                  ratingCountV2: "242",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54462659",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "51245317",
                              name: "French Fries - Medium",
                              category: "SIDES AND DIPS",
                              description: "Medium size Fries",
                              imageId: "n4ry9mep4uisjri10uqp",
                              inStock: 1,
                              isVeg: 1,
                              price: 12900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "261369191",
                                  groupName: "Choose your Sides",
                                  choices: [
                                    {
                                      id: "142533403",
                                      name: "Tandoori Flavour Dip - 20 gm",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533382",
                                      name: "Plain Rice Bowlz",
                                      price: 14900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533389",
                                      name: "Gold Edition - Regular Fries",
                                      price: 15900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369202",
                                  groupName: "Choose your Snacks",
                                  choices: [
                                    {
                                      id: "142533400",
                                      name: "Paneer Zinger Burger",
                                      price: 24900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533385",
                                      name: "Veg Zinger Burger",
                                      price: 18900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "261369209",
                                  groupName: "Choose Your Beverage",
                                  choices: [
                                    {
                                      id: "142533380",
                                      name: "Dew Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "142533402",
                                      name: "Virgin Mojito Reusable Bottle",
                                      price: 10900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "277959915",
                                  groupName: "Choose your Desserts",
                                  choices: [
                                    {
                                      id: "145356211",
                                      name: "Choco Mud Pie",
                                      price: 16900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145356210",
                                      name: "Choco Lava Cake",
                                      price: 13900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "118 ratings",
                                  ratingCountV2: "118",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54462660",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194832960",
                              name: "Naagin Sauce – The 65 Variant",
                              category: "SIDES AND DIPS",
                              description:
                                "Sauce that isn't too spicy. It's extremely family-friendly!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/12/44b45e3d-620d-4f91-a3c0-b778a2407206_7ed51074-f4c9-4c04-8758-0e510d8066a3.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 2900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "118822021",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194832959",
                              name: "Naagin Sauce – The Original",
                              category: "SIDES AND DIPS",
                              description:
                                "Homage to the classic South flavour, with a twist!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/12/747b7bde-d813-4f62-8220-cacb6e19ce46_6ad13917-24b4-489a-8054-2ce0f7ed733b.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 2900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "118822022",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "63005569",
                              name: "Tandoori Flavour Dip - 20 gm",
                              category: "SIDES AND DIPS",
                              description:
                                "Add Tandoori Masala Dip to your meal!",
                              imageId: "icpcqoet1ssvzkvd4g3m",
                              inStock: 1,
                              isVeg: 1,
                              price: 2900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "45 ratings",
                                  ratingCountV2: "45",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79430641",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2025/6/14/6aea8e43-f8d0-401b-80fe-b1c4971b79bc_65aa8eb0-9be8-476f-8b7c-86ae59de4bae.jpg",
                      categoryId: "69753126",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "DESSERTS",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100872204",
                              name: "Choco Lava Cake",
                              category: "DESSERTS",
                              description:
                                "Chocolate Goodness! Soft chocolate cake with lava oozing center",
                              imageId: "thb7rrdooctsnknsnatz",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "08238545-1445-41fc-8af3-b7861a38ea71",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "79430639",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121147775",
                              name: "Choco Mud Pie",
                              category: "DESSERTS",
                              description:
                                "Hit the Dessert Spot with the KFC Choco Mud Pie- creamy layered cake",
                              imageId: "fhtrvjerl7l2ck1crwhp",
                              inStock: 1,
                              isVeg: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "45 ratings",
                                  ratingCountV2: "45",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "28657230",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "thb7rrdooctsnknsnatz",
                      categoryId: "70169695",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "BEVERAGE",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "144412008",
                              name: "Virgin Mojito Reusable Bottle",
                              category: "BEVERAGE",
                              description:
                                "All New Reusable Mojito Bottle 330ml",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/19/2c400914-f9a8-4364-95dc-39237e57ec58_b1ec722a-e668-4c17-8cc2-63727089a771.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "89167241",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "150346795",
                              name: "Dew Mojito Reusable Bottle",
                              category: "BEVERAGE",
                              description:
                                "A refreshing drink with Mountain Dew, lime and soda to beat the heat",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/10/fa3a765b-0e7c-44ca-a7d6-9cf0711be53e_f28a7824-699d-4fa1-936a-7170e9c7ee4d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "89263204",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "144412006",
                              name: "Pepsi Reusable Bottle",
                              category: "BEVERAGE",
                              description: "New Reusable Pepsi Bottle 330ml",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/19/1af9ccc6-d64b-4345-86bf-a030427e5149_ee0c4915-6627-40ef-a2ce-9628d08f579d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              finalPrice: 7900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              cartContext: "quick_prep",
                              offerIds: [
                                "cf8c24e5-1de1-4a53-a672-8ac1349b8a6a",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "89167240",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "150346794",
                              name: "7Up Reusable Bottle",
                              category: "BEVERAGE",
                              description: "7up reusable Bottle ",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/20/f35c1655-ccc4-4eb9-9d14-0d3f7c36fa15_3976941b-923f-4f19-b381-6067c8e285e2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "89263201",
                              menuFilterIds: ["VEG", "toprated"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "150346793",
                              name: "Mirinda Reusable Bottle",
                              category: "BEVERAGE",
                              description: "Mirinda in a KFC reusable bottle",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/19/14b5bbb5-ca27-4fac-abe3-004d94c7a319_75b050f5-1643-4b0e-86dc-0dcd4c8a7899.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "89263207",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "150346792",
                              name: "Mountain Dew Reusable Bottle",
                              category: "BEVERAGE",
                              description:
                                "Mountain Dew in a KFC reusable bottle",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/19/5a300a16-319e-4c09-ada8-42f6b33a6913_12b2f077-f9dd-4395-ac55-f1dbed1b6fe5.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "89263209",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/10/19/2c400914-f9a8-4364-95dc-39237e57ec58_b1ec722a-e668-4c17-8cc2-63727089a771.jpg",
                      categoryId: "70169694",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "RAMADAN SPECIAL MENU",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194401915",
                              name: "Peri Peri Iftar Box",
                              category: "RAMADAN SPECIAL MENU",
                              description:
                                "1 Peri Peri Leg + 1 Regular Popcorn + 2 Wings + 1 DIP",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/3/3/5a7327cc-68a3-4faf-9f5a-29a43fe15c89_7d8ce8d4-efb8-4e29-a46b-19b4c6437fa2.jpg",
                              inStock: 1,
                              price: 45800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "119466953",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194401913",
                              name: "Grand Iftar Sharing Bucket",
                              category: "RAMADAN SPECIAL MENU",
                              description:
                                "2 Peri Peri leg + 2 Hot & Crispy + 6 strip + 6 wings + Large Popcorn + Dips",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/3/3/9adb2936-bba7-4c64-a98a-c2e0eff5dba8_6a36131e-0280-43c1-bc6e-722682fdc6b9.jpg",
                              inStock: 1,
                              price: 140800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "119466952",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "194401912",
                              name: "Zinger Popcorn Feast",
                              category: "RAMADAN SPECIAL MENU",
                              description:
                                "2 Zinger Fillet + Med Popcorn + 6 Strip",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/3/3/e42f7df0-1991-4fe8-9cfe-9a89e9817b71_f0bacc14-7fb0-4dd6-8ab9-e647519671d1.jpg",
                              inStock: 1,
                              price: 80500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "119466956",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195814930",
                              name: "Ramadan Family Rice Bowl Combo",
                              category: "RAMADAN SPECIAL MENU",
                              description:
                                "Flat 30% off on 4 pc Hot & Crispy, 4 pc strips, 2 plain rice bowl & 2 dips",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/3/12/298e1f58-ed97-4db5-83db-a0f6725cc933_14dc9c10-62c0-4792-9e2a-687954ed1039.jpg",
                              inStock: 1,
                              price: 106300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "119466954",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195814929",
                              name: "Ramadan Mega Chicken Feast",
                              category: "RAMADAN SPECIAL MENU",
                              description:
                                "12 Hot & Crispy + 4 Peri Peri Strip + 4 Wings",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/12/24/a8a7d159-fa18-4285-af24-12ab925eb9e8_fb0574ee-e13b-4a15-b14d-280dc389a9b6.jpg",
                              inStock: 1,
                              price: 186000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "119466955",
                              menuFilterIds: ["NONVEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/3/3/5a7327cc-68a3-4faf-9f5a-29a43fe15c89_7d8ce8d4-efb8-4e29-a46b-19b4c6437fa2.jpg",
                      categoryId: "72744559",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "B2G1 SPECIAL OFFER",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "177135917",
                              name: "Gold EditionVeg Zinger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Our Signature Veg Zinger Dunked in Cheese Sauce in the new Brioche Bun to get your tastebuds tingling",
                              inStock: 1,
                              isVeg: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "108862680",
                              menuFilterIds: ["VEG"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516074",
                              name: "Classic Chicken Zinger Burger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "American Signature Classic Chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
                              imageId: "d5bc5b32dd177f5f207cad66556a572b",
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486540",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516070",
                              name: "Spicy Chicken Zinger Burger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Caribbean Spicy Zinger Burger with Spicy Bun & Spicy chilli sauce with Zinger Fillet, Lettuce, Onion and Tomatoes",
                              imageId: "e3c645c8b5caa9c1b6374d88709e9e05",
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486551",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516067",
                              name: "Tandoori Chicken Zinger Burger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Zinger burger with a delicious Indian Tandoori flavour sauce",
                              imageId: "af3699168db40a2dbadc372d87338e97",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486553",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516064",
                              name: "Mexican Zinger Pro Burger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Premium Mexican Burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/17/63e333fd-caa9-4032-9f1c-1799f26d5a45_2d9e58d4-6ad7-4acc-b58c-19f3f78acba9.jpg",
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486548",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516062",
                              name: "Paneer Veg Zinger Burger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Paneer Crunchy Patty Burger with tangy sauce and Veggies",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/4/56c5c073-4ac4-4c43-990e-16a558cf3877_87868b65-5a9c-4dd4-8f2e-e47ad6ee57d2.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486549",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516059",
                              name: "Vegetarian Zinger Burger - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Veg Signature burger with crispy patties, veggies & a tangy sauce",
                              imageId: "a403a55dc5b74cc6acfcfa755f30c165",
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486557",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516051",
                              name: "American Classic Chicken Roll - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Roll with Layerful parantha, single chicken strip, onions and two spicy sauce",
                              imageId: "ebd8e706049e4fd5ca79ecf708f8ecba",
                              inStock: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.1",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486535",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516047",
                              name: "Tandoori Indian Chicken Roll - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Roll made with flaky lachha paratha, perfectly fried chicken strips in rich and creamy tandoori sauce",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/9/4c966f38-c191-4d0e-a54c-c70b832e4de1_69ee13c1-f267-4385-ab98-6efbc811de33.jpg",
                              inStock: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486554",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516043",
                              name: "Korean Chicken Tangy Roll - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Roll featuring delicious Tangy Korean kimchi, vegetables and crunchy chicken strips",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/9/377309f8-992e-4fea-a461-1ab5d7218b5e_b814bc78-3961-4332-96df-8aefb9ba86e4.jpg",
                              inStock: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486543",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516041",
                              name: "Thai Chicken Spicy Roll - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Roll featuring delicious Thai flavours and sauces in a flaky paratha, chicken strips and vegetables",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/9/fa48d82c-2322-4ba7-b419-27e79ca1b217_0800d19e-02b8-45e2-ad64-21ee0d877821.jpg",
                              inStock: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486555",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516038",
                              name: "Veg Indian Spicy Roll - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Special Veg spicy indian sauce and veggie roll",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/7/10/523afb1b-9bc9-4a4f-9c6e-1dda60b7da21_61c763cc-a9ca-4c13-ba15-3fe28d631b91.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486558",
                              menuFilterIds: [
                                "B2G1",
                                "VEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516035",
                              name: "Regular Popcorn Chicken - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Bite-sized signature boneless chicken, with special spices in Regular size",
                              imageId: "ekczoyi57wriv1rqsmpl",
                              inStock: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486550",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516030",
                              name: "Medium Popcorn Chicken - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Bite-sized signature boneless chicken, with special spices in Medium size",
                              imageId: "ts7fhcu99uqvpo9nlxn5",
                              inStock: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486547",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516026",
                              name: "Large Popcorn Chicken - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Bite-sized signature boneless chicken, with special spices in Large size",
                              imageId: "p6yghgzpqqlooi2lziyj",
                              inStock: 1,
                              price: 27900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486544",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516023",
                              name: "Chicken Popcorn Rice Bowl - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Aromatic Rice Bowlz with chicken popcorn & gravy inside!",
                              imageId: "9e57b3b9478a4a0b114b8ba4e1b5be89",
                              inStock: 1,
                              price: 23000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486538",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516019",
                              name: "Grilled Smoky Rice Bowl - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Smoky Red Chicken aromatic Rice Bowl mixed with spicy gravy",
                              imageId: "0c92428379d15d91c401e92044740d6e",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486542",
                              menuFilterIds: [
                                "B2G1",
                                "NONVEG",
                                "offer",
                                "toprated",
                              ],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516016",
                              name: "Classic Chicken Rice Bowl - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Hot & Crispy Chicken aromatic Rice Bowl mixed with spicy gravy inside",
                              imageId: "a74de1a2b59bf60d616d458b7e78bd1a",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486539",
                              menuFilterIds: ["B2G1", "NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516013",
                              name: "Vegetarian Rice Bowl - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Veg aromatic Rice Bowl mixed with spicy gravy inside",
                              imageId: "b55628a57b4ae927013617605d4db6e6",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486556",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516011",
                              name: "Virgin Mojito Reusable Bottle - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Refreshing drink with lime and soda to beat the heat",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/10/19/2c400914-f9a8-4364-95dc-39237e57ec58_b1ec722a-e668-4c17-8cc2-63727089a771.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486559",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "167516005",
                              name: "Dew Mojito Reusable Bottle - DOTD",
                              category: "B2G1 SPECIAL OFFER",
                              description:
                                "Refreshing drink with Mountain Dew, lime and soda to beat the heat",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/12/10/fa3a765b-0e7c-44ca-a7d6-9cf0711be53e_f28a7824-699d-4fa1-936a-7170e9c7ee4d.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 2 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "B2G1",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B2G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B2G1",
                              ratings: {
                                aggregatedRating: {},
                              },
                              offerIds: [
                                "aeb3bb5c-e0ae-41f6-a8e0-b9766fe012cc",
                              ],
                              parentId: "101486541",
                              menuFilterIds: ["B2G1", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "d5bc5b32dd177f5f207cad66556a572b",
                      categoryId: "72784925",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 10118029000185"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "KFC",
                      area: "Kakinada",
                      completeAddress:
                        "KFC RESTAURANT,82 EAST SRMT MALL ,NEAR SURPAVARAM JUNCTION,RAMANAYYAPETTA,KAKINADA,ANDHRA PRADHESH 533005",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "9926cec3-3f22-4f8a-8813-8451075666c4",
  sid: "q0g6a01ed78-9acd-46df-bea1-f203b07c3",
  deviceId: "ded857e0-08bf-e46d-4fdd-470a678205c4",
  csrfToken: "qcJLqYt9ZMqz-Yjwm5q8g2SxWGYKFJeDIHauU5OQ",
};
