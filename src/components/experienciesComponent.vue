<template>
  <div class=" header-bg-dark-1 px-20 pt-20 py-5 flex items-center flex justify-center">
    <div class="-my-6">
    <h2 class="text-lg text-white font-bold">{{ $t('experiencies.title') }}</h2>
      <!-- Experience #1 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{{ $t('experiencies.since') }} 2024</time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-2 pb-10 ring-1 ring-slate-900/5 shadow-xl" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-1   rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/paschoalotto2.png" class="h-20" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">ESTÁGIO DE  PLANEJAMENTO DIGITAL - Paschoalotto</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>Tratamento de Bases de Acionamento:</strong> Responsável pela geração de banco de dados em excel através do R Studio para Agentes Virtuais e  ChatBot
                    </li>
                    <li>
                      <strong>Reports de Produção:</strong> Acompanhamento de produção HXH (Hora a Hora)
                    </li>
                    <li>
                      <strong>Acesso a acordos em BD:</strong> Através do PgAdmin tenho acesso aos clientes que fecharam acordos e como isso ter uma análise de perfil ou cancelamento de boletos
                    </li>
                    <li>
                      <strong>Power BI:</strong> Análise de Dashboards em Power BI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience #2 -->
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2021 - 2019
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-5 pb-10 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-1   rounded-md shadow-lg">
                <img src="../assets/images/logoazevedo.png" class="h-20" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FRONTEND ENGINEER FREELANCE - André Azevedo</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Gerenciamento e orientatções aos devs de como prosseguir com suas tarefas.</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li><strong>Camda:</strong> Aplicativo para coleta de dados de entrada e saida de protudos de todas as filiais, utilizando um periférico coletor que utilizasse Android.</li>
                    <li><strong>Vale do Igapó:</strong> Aplicativo para leitura de registros utilização de volume de agua de casas no Vale do Igapó OFFLINE, pois o vale fica distante da área de rede de dados. </li>
                    <li><strong>Doutor chama:</strong> Aplicativo Web desenvolvido para clinicas médicas. Cada sala/atendente poderia solicitar a presença de um paciente apertando apenas 1 botão. O paciente seria chamado pelo nome em uma TV que poderia estar instalada em qualquer ambiente que tenha acesso à internet.</li>
                    <li><strong>Sistel:</strong> Aplicativo BPM Offline, para que técnicos da empresa pudessem ir aos clientes e registrar suas atividades mesmo sem internet. </li>
                    <li><strong>Protocolo já:</strong> WebApp desenvolvido para gerenciamento e acompanhamento de protocolos realizados por escritórios de advocacia.</li>
                  </ul>
                  <i>Em todos esses projetos foram utilizados metodologias Ageis, alguns projetos foram omitidos.</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Experience #3
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2019 - 2017
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/logobrancofinch.png" class="h-8" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>Triare BPM:</strong> Ferramenta de BPM com versões em desenvolvidas com diversas versões de PHP, desde a versão 4 até a versão 7. Ferramenta altamente modificavel para atender todas as necessidades dos clientes que eram de diversos ramos, desde empresa de papel até bancos.
                    </li>
                    <li>
                      <strong>Auth Service:</strong> API criada para ser um meio de autenticação de diversas outras API's, gerando assim a facilidade de criar softwares da empresa e ter apenas um usuário para diversos sistemas diferentes. (PHP, Lumen)
                    </li>
                    <li>
                      <strong>Forms:</strong> Sistema muito parecido com com o Form da Google. Com ele era possivel a empresa criar formulários com ou sem senha, com todos os tipos de campos e validações possiveis. Os formularios eram criados via API e gerado um Link para acesso, o preenchimento geralmente era integrado por API com ferramtentas externas. (PHP, LARAVEL, VueJS)
                    </li>
                    <li>
                      <strong>Assing:</strong> Ferramenta utilizada para gerar Canvas para Assinaturas Gráfica, ou seja, se seu sistema necessitava colher assinatura de algum individuo, ele poderia criar um Assign para isso, e integrar com seu sistema sem a necessidade de desenvolver do 0. (PHP, Laravel, Javascript, VueJS)
                    </li>
                  </ul>
                  <i>Em todos esses projetos foram utilizados metodologias Ageis.</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->

      <!-- Experience #4
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2017 - 2014
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/eprom_logo.png" class="h-20" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>eSolutions Web:</strong>  Responsável por desenvolver a migração de software ERP que foi projetado em Delphi para web, utilizando PHP, MySql, Javascript.
                    </li>
                    <li>
                      <strong>eManager:</strong> Responsável por melhorias na ferramenta, a qual era utilizada como agenda vinculada com o Google Calendar.
                    </li>
                    <li>
                      <strong>Passaros:</strong> Sistema de gerenciamento de competições de canto de passáros. Manutenção do sistema antigo e desenvolvimento de novo sistema utilizando PHP, Laravel, Bootstrap e Javascript.
                    </li>
                    <li>
                      <strong>Cebraco:</strong> Ferramenta desenvolvida com PHP 5. Crawlers para busca em diversos sites sobre CPF's e CNPJS. O software ajuda as empresas a saber a situação dos seus clientes antes de realizar empréstimos ou vendas parceladas.
                    </li>
                    <li>
                      <strong>BI:</strong> Ferramenta para apresentação de gráficos, onde o usuário poderia inserir um script SQL para gerar os graficos que desejasse e ter atualização em tempo real dos dados da empresa. PHP, MySql, Firebird, SQLServer, Javascript, Laravel.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->

      <!-- Experience #5
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2014 - 2013
          </time>
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full" data-aos="fade-up">
            <div>
              <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
                <img src="../assets/images/companies-logos/lecom.svg" class="h-10" alt="">
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Trainee</h3>
            <div class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              <div class="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-5">
                  <p class="text-gray-600">Desenvolvimento de aplicações web e mobile de acordo com a demanda de cada projeto. Atuei em varios projetos:</p>
                  <ul class="list-disc list-inside mt-2 text-gray-600">
                    <li>
                      <strong>Athos BPM:</strong>  Responsável por criar scripts para rotinas do software bpm em JAVA e rotinas para tratamento em tela com Javascript e jQuery.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div -->
    </div>

    <!--
    <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2  rounded-md shadow-lg">
          <img src="../assets/images/companies-logos/Firework-logo.png" class="h-20" alt="">
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">FULLSTACK ENGINEER</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>

    <div class="bg-white ml-3 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">

        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div> -->

    <!-- <div>
      <h2> Categories </h2>
      <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
        <li>Sales</li>
        <li>Marketing</li>
        <li>SEO</li>
      </ul>
    </div> -->
  </div>
</template>
<script>

export default {
  data () {
    return {
      companiesJobs: [
        {
          logo: '',
          title: '',
          text: '',
          date: ''
        }
      ]
    }
  },
  methods: {
    goToExternalLink (link) {
      window.open(
        link,
        '_blank'
      )
    }
  }
}
</script>
<style scoped>
.bg-purple-gradient {
  background: rgb(100,82,144);
  background: linear-gradient(169deg, rgba(100,82,144,1) 0%, rgba(22,2,66,1) 100%);
}
</style>
