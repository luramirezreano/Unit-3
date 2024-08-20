DOM- Document Object Model

Code --> Generates a html docment (DOM) --> makes the webpage 

<html>
    <head>
        ...
        ...
    </head>
    <body>
        ...
        ...
    </body>
</html>

<abc        // starting of abc-TAG
</abc       // closing of abc-TAG

TAG: 
    1. tag names cannot have spaces 
    2. tag can have attributes 

eg: div, html, head, body, script, input, a, button, form

Example 1 :

<abc attr1="valur1" attr2="value2" attr3 attr4="value4" attr5="value five">
attributes of tag:
    1. atrribute names cannot have spaces
    2. Attributes may or may not have any value 

tag --> abc
attributes of abc-tag --> attr1, attr2, attr3, attr4, attr5
value of attr1 = "value1"
value of attr2 = "value2"
value of attr3 = 
value of attr4 = "value4"
value of attr5 = "value five"

Example 2: 
<buton value="1" class="_42ft_4jy0_6lth_4jy6 _4jy1 selected _51sy">

tag --> button
attributes of button-tag --> value, class
    value of value-attribute: "1"
    value of class-attribute: "_42ft_4jy0_6lth_4jy6 _4jy1 selected _51sy"ra

Text in between TAGS: 

<abc attr1="valur1" attr2="value2" attr3 attr4="value4" attr5="value five">     //starting of abc-tag
    <def attr11="value11">                                                      //starting of def-tag
        "123"                                                                      --> Text of def-tag
    </def>                                                                      //closing of def-tag
    <fgh attr21="value21" attr22="value22">                                     //starting of fgh-tag
        "xyz"                                                                      --> text of fgh-tag
    </fgh>                                                                      //closing of fgh-tag
</abc>                                                                          //closing of abc-tag

Example 2: 

<buton value="1" class="_42ft_4jy0_6lth_4jy6 _4jy1 selected _51sy">
    Log In                                                                    //button-tag has a text = "Log In"
</button>
















