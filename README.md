F1V Hackathon 2021

Drumroll Please API

Deployed URL: https://drumroll-please-api.herokuapp.com/

GET '/loops'

GET '/modules'

GET '/loops/:id'

POST '/loops'
  - name: string

POST '/modules'
  - loopId: refence to Loop (integer)
  - beat_1_1: boolean
  - beat_1_2: boolean
  - ...
  - beat_4_4: boolean
  - effects: JSON
  - instrument: reference to instrument (string)
  - volume: integer (0-100)
  

PUT '/loops/:id'
  - name: string

PUT '/modules:id'
  - beat_1_1: boolean
  - beat_1_2: boolean
  - ...
  - beat_4_4: boolean
  - instrument: reference to instrument (string)
  - volume: integer (0-100)
  - effects: JSON

DELETE '/loops/:id'

DELETE '/modules/:id'


