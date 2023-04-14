<br/>
<p align="center">
  <h1 align="center">api-simulacao-instituicao</h1>

  <h3 align="center">Simulador de dados de Instituição Escolar</h3>

  <p align="center">
    Um simulador onde gera dados de cursos, disciplinas e atividades para serem inseridos no Apache Kafka
    <br/>
    <br/>
    <br/>
    <a href="https://github.com/edgardhsl/api-simulacao-instituicao/issues">Report Bug</a>
    .
    <a href="https://github.com/edgardhsl/api-simulacao-instituicao/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/edgardhsl/api-simulacao-instituicao?color=dark-green) ![Forks](https://img.shields.io/github/forks/edgardhsl/api-simulacao-instituicao?style=social) ![Stargazers](https://img.shields.io/github/stars/edgardhsl/api-simulacao-instituicao?style=social) ![Issues](https://img.shields.io/github/issues/edgardhsl/api-simulacao-instituicao) 

## Sumário

* [Sobre o projeto](#sobre-o-projeto)
* [Primeiros passos](#primeiros-passos)
  * [Pré-requisitos](#pré-requisitos)
  * [Instalação](#instalação)
* [Uso da aplicação](#uso-da-aplicação)
* [Contribuição](#contribuição)
* [Autores](#autores)

## Sobre o projeto

Este projeto é um dos três microsserviços que estão sendo desenvolvidos para a disciplina de TCC 2. 

O objetivo deste serviço é gerar dados relacionados a cursos, disciplinas e atividades e sincronizá-los com tópicos no Apache Kafka, permitindo que outras APIs que fazem parte da arquitetura proposta possam consumir esses dados.

## Primeiros passos

Abaixo segue as instruções de como executar o projeto em seu ambiente.

### Pré-requisitos

Para que as dependências sejam instaladas, você precisa instalar o npm.

O npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.

* npm

```sh
npm install npm@latest -g
```

### Instalação

1. Clone the repo

```sh
git clone https://github.com/edgardhsl/api-simulacao-instituicao.git
```

2. Instale as dependências do projeto

```sh
npm install
```

3. Configure os dados dos brokers do Apache Kafka no arquivo: `src/app/config/kafka_brokers.json`

```JS
[
    {
        "host": "192.168.1.64",
        "port": "9092"
    }
]
```

## Uso da aplicação

Você pode executar o projeto com o comando abaixo:
`npm run dev`

## Contribuição



### Creating A Pull Request

1. Fazer um Fork do Projeto.
2. Crie sua branch do recurso (`git checkout -b feature/AmazingFeature`)
3. Faça o commit das suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Envie para a sua branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull-Request

## Autores

* **Edgard H. Santos Lopes** - *Graduando em Sistemas de Informação* - [Edgard H. Santos Lopes](https://github.com/edgardhsl) - *Projeto completo*
