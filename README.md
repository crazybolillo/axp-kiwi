# axp-kiwi

This is a sample custom AXP widget to illustrate how to develop widgets. It shows how to:

- Use React in a Widget
- Fetch data from external services
- Gather interaction data from AXP

## Getting started

To test out the widget, import its JSON file through the administration portal. Make sure
to update the JSON's `override_url` so it points to the URL where you will host it, this can be
a ngrok endpoint for example.

Run `npm run build` followed by `npm run serve`. If using ngrok expose port 8080. The widget
should load now (as long as AXP Layout is configured properly).

You can also test the widget without AXP by running `npm run dev`, this will run a development
server on port 1234 by default. There is no API access, but you can test everything
else, makes it easier to test out stuff quickly.
