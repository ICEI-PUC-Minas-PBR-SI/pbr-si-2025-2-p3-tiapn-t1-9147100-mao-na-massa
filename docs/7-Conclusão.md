## 7. Conclusão

<span style="color:red">Pré-requisitos: <a href="6-Interface-Sistema.md"> Projeto da Solução</a></span>

_Apresentem, aqui, a conclusão do trabalho, que deve conter uma síntese dos principais resultados obtidos com a melhoria dos processos, uma discussão das limitações da solução proposta e sugestões de novas linhas de estudo._
7. Conclusão

<span style="color:red">Pré-requisitos: <a href="6-Interface-Sistema.md"> Interface do Sistema</a></span>

O desenvolvimento do projeto "Mão na Massa" permitiu validar a hipótese de que é possível transformar um processo informal e inseguro (contratação de serviços manuais) em uma experiência digital centralizada, segura e eficiente.

Através da modelagem dos processos AS-IS e TO-BE, identificamos as principais dores do mercado (insegurança no pagamento, falta de garantia de qualidade) e propusemos uma solução tecnológica robusta para endereçá-las. A arquitetura de três camadas, utilizando Java Spring Boot para o back-end e MySQL para o banco de dados, demonstrou ser a escolha ideal para atender aos requisitos de segurança (RNF-003) e escalabilidade da plataforma.

A definição do pagamento via PIX com retenção (escrow), gerenciado pelo sistema, é o principal resultado obtido, pois resolve a maior fricção do processo atual para ambas as partes: o Contratante só paga após o serviço confirmado, e o Prestador tem a garantia de recebimento.

Como limitação da solução proposta, a necessidade de um back-end desenvolvido em Java, embora robusta, implica um tempo de desenvolvimento inicial maior e uma complexidade técnica superior em comparação com soluções "no-code". Além disso, a plataforma depende da adesão inicial de profissionais qualificados para gerar valor aos contratantes.

Como sugestões para trabalhos futuros, recomenda-se a expansão do sistema de pagamento para incluir outras modalidades (como cartão de crédito) e o desenvolvimento de um aplicativo móvel nativo (iOS e Android), visando melhorar a usabilidade para os prestadores de serviço que estão em campo.