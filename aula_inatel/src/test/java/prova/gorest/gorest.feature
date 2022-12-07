Feature: Testando API gorest
  Background:
    * def base_url = "https://gorest.co.in/public/v2"
    * def tokenID = "ace8f28bb10ca5eadbde835bd78c774d4f187e070d5a8f219af1aec1ff454ded"

    Scenario: Criando um novo elemento usando metodo POST
      Given header Authorization = 'Bearer ' + tokenID
      Given url base_url
      And path "/users"
      And request {name: "Genivaldo", gender: "male", email: "genivaldo@test.com", status: "active"}
      When method post
      Then status 201

  Scenario: Criando um novo elemento que ja existe, retorno deve ser 422, usando metodo POST
    Given header Authorization = 'Bearer ' + tokenID
    Given url base_url
    And path "/users"
    And request {name: "Genivaldo", gender: "male", email: "genivaldo@test.com", status: "active"}
    When method post
    Then status 422

    Scenario: Deletando o elemento com o id inválido
      Given header Authorization = 'Bearer ' + tokenID
      Given url base_url
      And path "/users/249815674"
      And method delete
      Then status 404