// Carregar a API do Google Charts
google.charts.load('current', { packages: ['corechart'] });

// Definir função para desenhar o gráfico
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const academia = parseInt(document.getElementById('academia').value);
  const arte = parseInt(document.getElementById('arte').value);
  const divulgacao = parseInt(document.getElementById('divulgacao').value);
  const cozinhar = parseInt(document.getElementById('cozinhar').value);
  const tecnologia = parseInt(document.getElementById('tecnologia').value);
  const economia = parseInt(document.getElementById('economia').value);
  const engenharia = parseInt(document.getElementById('engenharia').value);
  const risco = parseInt(document.getElementById('risco').value);
  const entretenimento = parseInt(
    document.getElementById('entretenimento').value,
  );
  const hospitalidade = parseInt(
    document.getElementById('hospitalidade').value,
  );
  const literatura = parseInt(document.getElementById('literatura').value);
  const administracao = parseInt(
    document.getElementById('administracao').value,
  );
  const cinema = parseInt(document.getElementById('cinema').value);
  const musica = parseInt(document.getElementById('musica').value);
  const raciocinio = parseInt(document.getElementById('raciocinio').value);
  const educacao = parseInt(document.getElementById('educacao').value);
  const ciencia = parseInt(document.getElementById('ciencia').value);
  const esportes = parseInt(document.getElementById('esportes').value);
  const empreender = parseInt(document.getElementById('empreender').value);
  const ensinar = parseInt(document.getElementById('ensinar').value);
  const compreender = parseInt(document.getElementById('compreender').value);
  const habilidade_verbal = parseInt(
    document.getElementById('habilidade_verbal').value,
  );

  // Obtenha os valores das outras habilidades aqui

  var data = google.visualization.arrayToDataTable([
    ['Habilidade', 'Classificação'],
    ['Inteligência Acadêmica', academia],
    ['Artes', arte],
    ['Divulgação', divulgacao],
    ['Cozinhar', cozinhar],
    ['Tecnologia', tecnologia],
    ['Economia', economia],
    ['Engenharia', engenharia],
    ['Entretenimento', entretenimento],
    ['Correr Riscos', risco],
    ['hospitalidade', hospitalidade],
    ['Literatura', literatura],
    ['Administração', administracao],
    ['Cinema/Teatro', cinema],
    ['Música', musica],
    ['Raciocínio Numérico', raciocinio],
    ['Educação Infantil', educacao],
    ['Ciências', ciencia],
    ['Esportes', esportes],
    ['Empreender', empreender],
    ['Ensino Infantil', ensinar],
    ['Compreender as Pessoas', compreender],
    ['Habilidade Verbal', habilidade_verbal],
    // Adicione as outras habilidades com os valores selecionados
  ]);

  var options = {
    title: 'Habilidades e Classificações',
    hAxis: {
      title: 'Classificação',
      minValue: 0,
      maxValue: 4,
      ticks: [
        { v: 0, f: 'Baixo' },
        { v: 1, f: 'Médio' },
        { v: 2, f: 'Alto' },
        { v: 3, f: 'Olímpico' },
      ],
    },
    vAxis: {
      title: 'Habilidades',
    },
    bar: { groupWidth: '90%' },
    legend: { position: 'none' },
    orientation: 'horizontal',
  };

  var chart = new google.visualization.BarChart(
    document.getElementById('barchart_values'),
  );
  chart.draw(data, options);
}

const form = document.getElementById('inputForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  drawChart();
});
