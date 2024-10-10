<div align="center"> <a href="https://genezio.com/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/genez-io/graphics/raw/HEAD/svg/Icon_Genezio_White.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/genez-io/graphics/raw/HEAD/svg/Icon_Genezio_Black.svg">
    <img alt="genezio logo" src="https://github.com/genez-io/graphics/raw/HEAD/svg/Icon_Genezio_Black.svg" height="100" >
  </picture>
 </div>

<div align="center">

[![Join our community](https://img.shields.io/discord/1024296197575422022?style=social&label=Join%20our%20community%20&logo=discord&labelColor=6A7EC2)](https://discord.gg/uc9H5YKjXv)
[![Follow @geneziodev](https://img.shields.io/twitter/url/https/twitter.com/geneziodev.svg?style=social&label=Follow%20%40geneziodev)](https://twitter.com/geneziodev)

</div>

# Exposing Google Sheets as APIs - Express.js implementation

In the server/ folder, you'll find the express app that exposes two URL endpoints - one that lists all the sheet names in your spreadsheet, and one that lists the contents of a given sheet.

You can update the backend.msj file to add or modify functions, or create new backend routes.

In the client/ folder, you have a basic React.js app that calls the backend APIs. It lists the sheet names and once one is selected, lists the contents of that spreadsheet.

Check the src/App.tsx file to see how the backend APIs are called.

# Deploy
:rocket: You can deploy your own version of this template to Genezio with one click:

[![Deploy to Genezio](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/google-sheets-as-apis-expressjs)


## Learn more

To learn more about Genezio, take a look at the following resources:

- [Official genezio documentation](https://genezio.com/docs)
- [Tutorials](https://genezio.com/blog)

## Contact

If you need support or you have any questions, please join us in our [Discord channel](https://discord.gg/uc9H5YKjXv). We'd love to chat!

## Built With

- [Genezio](https://genezio.com/)
- [Node.JS](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

***

<div align="center"> <a href="https://genezio.com/">
  <p>Built with Genezio with ❤️ </p>
</div>
