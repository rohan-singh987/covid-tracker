



## We will start our project with Structuring components
        
      {/* Header */}
      {/* Title + Dropdown box */}

      {/* InfoBox --> cases */}
      {/* InfoBox --> recovery */}
      {/* InfoBox --> deaths */}

      {/* Table */}
      {/* graph */}
      
      {/* Map */}



  We will divide our app in 2 parts 
  1. app__left
  2. app__right

  we will use display : flex to put both parts side by side

  In app__left we keep our  Header
                            InfoBoxes
                            Map

  In app__left we keep our  Table
                            Graph




# HEADER
## Import material ui
`npm i @material-ui/core`

so we wan use elements like FormControl, Select and MenuItem.

STATE -: How to write a variable in react

USEREFFECT -: runs a piece of code based on a given condition

ASYNC -: send a request, wait for it, do something with info


# InfoBox
using {props} i.e -> {title, cases, total}
and using 3 components from react 
1. card
2. cardcontent
3. typography

This will create a card with {title} then {No of cases} and at last {total cases}


# Map




# LineGraph
                  
To draw graph we first need to import 

`npm i react-chartjs-2`