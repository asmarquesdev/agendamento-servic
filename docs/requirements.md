# Sistema de agendamento

## Objetivo

Subistituir os agendamentos feito de formas tradicionais em papel e caneta ou planilhas por um sitema que possa realizar automáticamente agendamento de horários e divulgar promoções, relizar aviso tanto para o admin. para evitar surpresas de duplicidade em horários.
tendo em vista á lista serviços e produtos oforecidos no estabelecimento.

## Usuários do sistema

- Administrador
- cliente

## Problemas identificados

- Duplicidade de horário(2 ou mais clientes no mesmo horário).
- furo.*Cliente desmarcando em cima da hora (Prejuizo finânceiro e poderia ter agendado com outros clientes).
- Esquecimentos: Clientes que não comparecem (falta de lembretes automáticos).
_Perda de tempo: O dono ou atendente precisa parar o que está fazendo o tempo todo para responder mensagens tirando dúvidas sobre horários disponíveis.

## Requisitos funcionais

- RF01 - Agendamento de horário. E
- RF02 - Cadastramento de usuários(futuro marketin semanais ou mensais). E
- RF03 - Editar lista de serviços oferecidos. E
- RF04 - registrar pagamentos. E
- RF05 - cadastros de planos. 
- RF06 - divulgação de redes sociais. 
- RF07 - slides de imagens dos serviços prestados.
- RF08 - link de imagens feitas no insta atualizando diretamente no site.
- RF09 - Escolher serviço. E
- RF09 - desmarcar serviços. E
## Requisitos não funcionais

-RNF01 - O sistema deve possuir autenticidade.
-RNF02 - O sistema deve funcionar em dipositivos móveis. 
-RNF03 - O tempo de resposta de ser inferior a 2 segundos.
-RNF04 - Os dados devem possuir backups periodicos.
-RNF05 - Apenas administrador podera acessar determinadas funcionalidaes.

## Regras de negócios

-RNF01 - O cliente deverá fazer o pagamento de 50% do valor do serviço no momento do agendamento via sistema para garantir o horário.
-RN02 - O adminstrador poderá demarcar o horário dando a opção de horário mais próximo ou reembolso até 24 horas antes.
-RN03 - O cliente poderá demarcar o horário até 24 horas antes do atendimento tendo direito á reembolso ou marcar umhorário mais adequado disponivel, tendo em vista que, se desmarcar após o prazo de 24 horas antecedente ao atendimento perderá o direito do reembolso.
 -RN04 - Em caso de pacote a regra vale para ambos os lados pagando o valor de 50% do serviço que iría ser prestado no dia ou agendamento para horário mais adequado para ambos os lados.

 ## Duvidas para o cliente

 - Existe interação com maquininha de pagamento.
 - Existe mais de um estabeleciento. 
 - Haverá emição de recibos.