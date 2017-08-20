## Setup

To start the app: 
  `npm install`
  `npm run start`


## Improvements
I wasn't sure if the input in the modal should be displayed on the main page, but opted to only update the main page after the save button is clicked, since this is how most production applications would work. If I were to implement it the other way, I would've kept track of the modal input in the redux store instead of the modal component. I would've saved the previous user information in case the user decides to click cancel or close, in which case I would restore their old information as the most up to date version.

If I had time to refactor, I would change how I implement how each "SettingsRow" is displayed. There is a lot of logic in the children components of SettingsRow that determines whether it's supposed to display name, address, or teams. This led to a lot of hardcoded values which would not be ideal when making changes, or expanding the codebase to use more unique SettingsRows. I would determine everything that needs to be passed down to each SettingsRow in the Settings component, this way all the configuration/logic would be in one place and all of the child components wouldn't have to worry about it.