---
title: Na terra do Google - Golang.
date: "2019-02-19T13:37:18.928Z"
---

## Olá

Estou iniciando uma série de artigos abordando técnologias diversas e hoje, trago a vocês GoLang, linguagem de proposito geral desenvolvida pela nossa querida(ou não) Google.

GoLang se destaca no meio da multidão por garantir desempenho com simplicidade:

* Compila direto para código de máquina
* Não utiliza de genéricos/<i>generics</i>
* Beneficio de um garbage collector nativo
* Munida de uma sintaxe limpa sem extravagar em abstrações
* Livre de máquinas virtuais

Traz consigo também concorrencia nativa e de implementação simples.

--

O foco desta série não é tutoriais longos e profundos e sim 
textos rápidos. 
Tentarei escrever algo light, leve e solto, algo legal e divertido de se ler...

Entendidos?

![alt text](https://media.giphy.com/media/39iws5wbhTn4cCjxZP/giphy.gif "Entendido")

## Instalando

Irei escrever um tutorial focado apenas na instalação do golang,  por ora, caso você já não tenha golang instalado, aconselho utilizar o playground: https://play.golang.org.

## O Básico do básico

![alt text](https://media.giphy.com/media/2vKBgkqIls4Hm/giphy.gif "Fome")

Vamos analisar esse código:

```go{}
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Olá Mundo! 0_0")
}
```

### Packages

A 1° linha define o pacote no qual este programa roda, em go cada programa deve pertence a um pacote.

Logo, precisamos definir o ``package main`` para que o compilador do Go possa inicializar alguma coisa, ou seja inicializar o pacote principal, experiemente remover a linha.

Pode ir, eu espero...

![alt text](https://media.giphy.com/media/u5eXlkXWkrITm/giphy.gif ":/")


Pois é, você acabou de levar um leve xingamento do compilador. 

### Importações

Logo abaixo temos as importações

```go{}
import (
	"fmt"
)
```

Se você vem de linguagens como Python, Java, e ~~eu sinto muito~~ javascript, irá se familiarizar com esta parte. A ideia é simples, importar outros pacotes, seus ou de terceiros para dentro do atual programa. Dessa forma é possível organizar e manter seu codigo mais limpo.

No exemplo demonstrado é importado o ``fmt``, que implementa um serie de funções para executar operações de I/O "Entrada e Saída", por exemplo: Scanf, Printf, Println entre outras.

Podemos importar múltiplos pacotes:

```go{}
import (
	"fmt"
	"math"
)
```

Ou com essa sintaxe:

```go{}
import "fmt"
import "math"
```

Porém, pra manter um padrão de código com qualidade é importante utilizar a importação estilo <i>factored</i>.



### Função principal

Mas antes, uma dica de música:

<iframe src="https://open.spotify.com/embed/track/57lCa95tmjJ8EYdNTex8Kk" width="300" height="38" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

Continuando....

```go{}
func main() {
	fmt.Println("Olá Mundo! 0_0")
}
```

Nessa parte é utilizado a palavra-chave ``func`` que declara uma função, porém a declaração da função com o nome ``main`` presente no trecho acima não é atoa, assim como ``package main`` precisamos definir uma função principal, caso o compilador não encontre esta função ele retornara isto: ``function main is undeclared in the main package``, ou seja, precisamos "declarar" a função main para que o código compile.

Spoiler: a função ``main`` é executada por uma ``goroutine``, porém isso é cena de outro capítulo.

![alt text](https://media1.tenor.com/images/412601134cd84db814e752fa8ceb2c92/tenor.gif?itemid=10848503 "Omg! O que é goroutines?")


## Hello Excel

> Quem  nunca escreveu um  Hello Word que dispare a primeira exceção.

Mas o que importa é o aprendizado, então não podemos esquecer do nosso querido e ritualistico "Hello World".

Dentro do escopo da função main, temos a utilização de um package importado o ``fmt``.
Lembrando que quando uma chamada se inicia com letra maiscula é por que foi importado, por isso o nosso ``Println`` tem o P.

```go{}
	fmt.Println("Olá Mundo! 0_0")
```

## E por hoje é isso

Minha dica é: pratiquem o básico, treine, pergunte e ensine também. Tenha curiosidade, aprenda algo novo.
O próximo artigo irá tratar sobre tipos e inferências de tipos, declaração de váriaveis e constantes, como atribuir e inicializar valores.


Até breve.

![alt text](https://vignette.wikia.nocookie.net/looneytunes/images/e/e1/All.jpg/revision/latest?cb=20150313020828 "o/")









