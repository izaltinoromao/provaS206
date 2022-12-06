Feature: Testando API do pokemon

  Scenario: Testando retorno ability/9
    Given url "https://pokeapi.co/api/v2/ability/9"
    When method get
    Then status 200