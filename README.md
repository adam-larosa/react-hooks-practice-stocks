# Practice Challenge: Flatiron Stock Exchange

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-practice-stocks/stocks.gif)

Welcome to the Flatiron Stock Exchange!

Today, you are a broker who is trying to better organize the stocks available on
the Flatiron Stock Market.

## Setup

All the stock data about can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, run `npm run server` to start up `json-server` on `http://localhost:3001`.

In another tab, run `npm start` to start up our React app at `http://localhost:3000`.

## Deliverables

After the stocks are fetched, your job is to:

- Render all the stocks onto the page. The styling of how a Stock should look
  like is already in the `Stock` component.

- Allow a user to buy a stock by clicking on it and when it is bought, it should
  be added to `MyPortfolio`.  The stock can be bought only **once**.  The stock should not dissapear from StockContainer.

- Allow a user to sell a stock in their `Portfolio` by clicking on the stock and
  it should be removed from their `Portfolio`.

- Shut down a business by clicking the `shut down!` button.  Which would delete the Stock from both the backend and from the Portfolio on the frontend.


## Bonus!


- Allow a user to sort the list of stocks alphabetically by the ticker name as
  well as by ascending price.

- Allow a user to filter stocks based on the type of the stock.

Best of luck!
