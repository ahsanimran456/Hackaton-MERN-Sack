import admin from "firebase-admin"
// https://firebase.google.com/docs/storage/admin/start
var serviceAccount = {
    "type": "service_account",
    "project_id": "todo-app-9e284",
    "private_key_id": "fbe3737e4bb144c5f0f3b9dbb9a8894d2b0a5595",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtfPVv0fD24fya\njDLIqi8Kuk1e0zUIUZbG+uHFsGDMPcmcm6ROoCopOIqQUNWVSpzEKAKrpE4P0P1p\nx8Rk3hpznQ3D5CjR+S9US6JWwBTkbEp3ubGmvJAlDTfFMZhNClvaqIuLCZLC8hdT\nfJAO8mcFp+XyfkdqDxFmiJ7TpU3t8tynmmZrOVk6fF89dIkgM7X9652f41iSwqxe\nq65JH3TQ+mfiQCXlH4WUU/0xqyEONCK3yCff+ZDFp/tNRyw0naQ3C7+8SR8dJA3k\nMjhX+6n7xxmdj38PknSbo0Spa3GEfE6M/Zy21zSRTpCELwmqq4SbD/chHlQCmmcR\nlOtpibqHAgMBAAECggEACM9Pp14B3oebTD3SVl5OBT1wsGAJUWLTRUd4L5HFWJnK\noylELrnzaiR05N81+V7QlyVw/UZasHLsa3K5hmXA8h4HlOsBJ6h/vsgYdk9KwE6/\neVT0sILizv7c1iaulTrxbykf7O+PhFbG2HZ62kd089SS2L2Q4tHhEFPfvN+oFW0q\nX+zHH/krlFGWvauDjdO4R8E4x+cXIo3VpSHFu2WWQ8Abb5WSoHoqGQmr2iTixPL5\ng16/NOJVeS6dVzSE9s+SoKCtiJ7jGjxQBcgTsIzDdIetA0GyvcEysgL+VBXs85Eb\ntK4+vqXbl8zu/S5jBIKcQR0sx77lyiv1fDl8w/hYAQKBgQDT5Q+cI1/Ez6InadQD\nDkF5nzzA0OCMa328uVHj8Z4oR/hWKPbFAKnm+y4wTsntzsPo9mVq/QBysQQBDuZ8\nT0UnRxWNJaXgzv4R8jY4IvdpZ4ML3tMhAZ3Izv/2muAeOJm84CsB4BvCDM9OXovd\naRIbIyNuxKq+U1O6kHNBpjFF0wKBgQDRmWBm1piw6xH7k3QfMp4S3y7SQraQVaf/\nau8bylOh+ISX5r9cvBdEgXkd0tKrG03h4fsnrymNMd1SaU/AQU3qddx+LkwwEKeo\nF4PjPF3KU2jbrF+ZLGwFZgvk5ZoDzAjHYjYIncNGY9dZ+/48CI0LpLyx1Csorekp\nadNu4bjD/QKBgQCXNRt5kWiy+nQ9afCoKZEhqDdjZOsIaWB1v00nu3DgT9NwMJVA\nKeQUd2QThvXkJKt63/GpclfSgG1aD/b7+Flh2QEREy+XCD8YMV7tmk4xwnMqklzZ\nbdzZwpW3tfd+uWdD+DfYg8NrK1b4FtH6MxN/mAid7+vkG3RhatlEnMMGjwKBgQCK\nMyNJK34KSTTWOGd8mpd3wgjRQoO1r4TR+OQn4sQ6K+7haZgLwUlmNihx7axSffJg\nWeyMQgaXvqU7zYx0K5sAWS5FVKmPl6u0Pa0Mi6Ub3tto3MM77/pZpOt6xZlDn6i6\nLpuKGtvC8dnwzyLW2pyFbN2uM0Mx01nFoK10kwiM0QKBgDbcMENLevtEYQIdDdkO\nd+FDSgOg6nXCSJzhWnV5Dpwaw40S6U87rl7AM5PGtlRW3fQe3YRLev0M4KGj/Wv3\n9cRyg6uVuRTyHWSLulks6W68TTO6CmHPlbARbHuExO3+O4BIERt5GvjUzgVDDAb5\nvOPJqTXUbNJoo2nHH3fAfK4N\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-31mph@todo-app-9e284.iam.gserviceaccount.com",
    "client_id": "109821596301235982936",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-31mph%40todo-app-9e284.iam.gserviceaccount.com"
  }
  ;
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "gs://todo-app-9e284.appspot.com"
});
const Bucket = admin.storage().bucket("gs://todo-app-9e284.appspot.com");


export default Bucket