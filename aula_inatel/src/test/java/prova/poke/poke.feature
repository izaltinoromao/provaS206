Feature: Testando API do pokemon

  Background:
    * def base_url = "https://pokeapi.co/api/v2"

  Scenario: Testando retorno ability/9
    Given url base_url
    And path "/ability/9"
    When method get
    Then status 200

  Scenario: Testando retorno pikachu mais json.
    Given url base_url
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == "pikachu"
    And match response.id == 25

  Scenario: Testando retorno pikachu entrando em um dos elementos do array de idiomas.
    Given url base_url
    And path '/version/1'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7
