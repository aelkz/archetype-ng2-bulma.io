import { Injectable } from '@angular/core';

/**
 * Classe service responsável por prover os recursos associadas a entidade 'Usuario'.
 */
@Injectable()
export class UsuarioService {
  private usuarios: any[];

  /**
   * Construtor da classe.
   */
  constructor() {
    this.usuarios = [
      {
        'name': 'Larissa',
        'company': 'Diam Lorem Incorporated',
        'office': 'Rimouski',
        'startDate': 'December 17th, 2013',
        'salary': '$59,551.42'
      },
      {
        'name': 'Martina',
        'company': 'Vestibulum PC',
        'office': 'Dietzenbach',
        'startDate': 'January 21st, 2004',
        'salary': '$56,364.26'
      },
      {
        'name': 'Mariam',
        'company': 'Per Inceptos Hymenaeos Inc.',
        'office': 'Appelterre-Eichem',
        'startDate': 'July 2nd, 2007',
        'salary': '$56,969.65'
      },
      {
        'name': 'Lamar',
        'company': 'Enim Diam Institute',
        'office': 'Alcalá de Henares',
        'startDate': 'November 10th, 2015',
        'salary': '$97,614.15'
      },
      {
        'name': 'Emerson',
        'company': 'Magna Phasellus Corporation',
        'office': 'Kidderminster',
        'startDate': 'June 28th, 2005',
        'salary': '$184,630.32'
      },
      {
        'name': 'Abel',
        'company': 'Et Libero Associates',
        'office': 'Montaldo Bormida',
        'startDate': 'September 7th, 2016',
        'salary': '$79,165.03'
      },
      {
        'name': 'Linus',
        'company': 'Morbi Institute',
        'office': 'Borno',
        'startDate': 'September 4th, 2013',
        'salary': '$737,084.34'
      },
      {
        'name': 'Shaine',
        'company': 'Maecenas Corp.',
        'office': 'Angleur',
        'startDate': 'July 7th, 2011',
        'salary': '$98,935.36'
      },
      {
        'name': 'Noah',
        'company': 'Convallis Est Associates',
        'office': 'St. Albert',
        'startDate': 'January 22nd, 2000',
        'salary': '$125,297.34'
      },
      {
        'name': 'Edan',
        'company': 'Nec LLP',
        'office': 'Norman Wells',
        'startDate': 'May 12th, 2012',
        'salary': '$268,738.17'
      },
      {
        'name': 'Winter',
        'company': 'Vivamus Nibh Institute',
        'office': 'Kamarhati',
        'startDate': 'December 31st, 2003',
        'salary': '$077,759.87'
      },
      {
        'name': 'Donna',
        'company': 'Neque Sed PC',
        'office': 'Ashoknagar-Kalyangarh',
        'startDate': 'March 26th, 2013',
        'salary': '$395,671.49'
      },
      {
        'name': 'Hope',
        'company': 'Nunc Ullamcorper Eu Institute',
        'office': 'Curon Venosta/Graun im Vinschgau',
        'startDate': 'April 29th, 2013',
        'salary': '$413,663.84'
      },
      {
        'name': 'Lysandra',
        'company': 'Nunc Incorporated',
        'office': 'North Las Vegas',
        'startDate': 'December 15th, 2006',
        'salary': '$36,625.73'
      },
      {
        'name': 'Lester',
        'company': 'Donec Elementum Lorem Company',
        'office': 'Molina',
        'startDate': 'October 16th, 2005',
        'salary': '$85,300.38'
      },
      {
        'name': 'Lila',
        'company': 'Et Magnis Dis Ltd',
        'office': 'Ranchi',
        'startDate': 'January 14th, 2010',
        'salary': '$75,908.34'
      },
      {
        'name': 'Destiny',
        'company': 'Integer Associates',
        'office': 'Stonehaven',
        'startDate': 'July 19th, 2003',
        'salary': '$110,504.85'
      },
      {
        'name': 'Tobias',
        'company': 'Pede Blandit Consulting',
        'office': 'Aix-en-Provence',
        'startDate': 'June 14th, 2012',
        'salary': '$780,320.18'
      },
      {
        'name': 'Addison',
        'company': 'Aliquet Associates',
        'office': 'Kidwelly',
        'startDate': 'November 25th, 2007',
        'salary': '$636,785.81'
      },
      {
        'name': 'Carl',
        'company': 'Eu Arcu Morbi Corporation',
        'office': 'Papudo',
        'startDate': 'May 24th, 2000',
        'salary': '$10,512.48'
      },
      {
        'name': 'Indira',
        'company': 'Proin Nisl Consulting',
        'office': 'Sperlinga',
        'startDate': 'March 23rd, 2008',
        'salary': '$133,819.74'
      },
      {
        'name': 'Preston',
        'company': 'Nisl Quisque Inc.',
        'office': 'Burdinne',
        'startDate': 'April 12th, 2008',
        'salary': '$736,544.08'
      },
      {
        'name': 'Wing',
        'company': 'Purus Nullam PC',
        'office': 'Chastre',
        'startDate': 'December 15th, 2014',
        'salary': '$810,872.61'
      },
      {
        'name': 'Carson',
        'company': 'Integer Vulputate Corporation',
        'office': 'Muridke',
        'startDate': 'September 16th, 2013',
        'salary': '$819,881.70'
      },
      {
        'name': 'Burton',
        'company': 'Enim Consulting',
        'office': 'New Orleans',
        'startDate': 'December 10th, 2009',
        'salary': '$20,528.66'
      },
      {
        'name': 'Henry',
        'company': 'Tellus Suspendisse Limited',
        'office': 'Hénin-Beaumont',
        'startDate': 'June 5th, 2007',
        'salary': '$892,303.87'
      },
      {
        'name': 'Hayden',
        'company': 'Malesuada PC',
        'office': 'Abbotsford',
        'startDate': 'July 3rd, 2010',
        'salary': '$88,521.46'
      },
      {
        'name': 'Chiquita',
        'company': 'Dolor Vitae Corporation',
        'office': 'Dublin',
        'startDate': 'July 3rd, 2013',
        'salary': '$459,578.10'
      },
      {
        'name': 'Olga',
        'company': 'Orci Corp.',
        'office': 'Colombo',
        'startDate': 'October 15th, 2014',
        'salary': '$1,009.43'
      },
      {
        'name': 'Meghan',
        'company': 'Maecenas Foundation',
        'office': 'Coventry',
        'startDate': 'March 14th, 2016',
        'salary': '$93,679.83'
      },
      {
        'name': 'Quintessa',
        'company': 'Dui Nec Tempus Ltd',
        'office': 'Marcedusa',
        'startDate': 'July 1st, 2006',
        'salary': '$985,245.40'
      },
      {
        'name': 'Adena',
        'company': 'Neque Nullam Corporation',
        'office': 'Neusiedl am See',
        'startDate': 'June 9th, 2013',
        'salary': '$262,727.14'
      },
      {
        'name': 'Francis',
        'company': 'Consectetuer Euismod Consulting',
        'office': 'Bondo',
        'startDate': 'September 2nd, 2006',
        'salary': '$221,293.44'
      },
      {
        'name': 'Tobias',
        'company': 'Lorem Donec Limited',
        'office': 'Brampton',
        'startDate': 'April 30th, 2006',
        'salary': '$661,314.70'
      },
      {
        'name': 'Emerson',
        'company': 'Lorem Limited',
        'office': 'Irvine',
        'startDate': 'July 19th, 2003',
        'salary': '$46,741.66'
      },
      {
        'name': 'Allistair',
        'company': 'Enim Sit Amet Corporation',
        'office': 'Huntley',
        'startDate': 'October 26th, 2007',
        'salary': '$96,770.71'
      },
      {
        'name': 'Philip',
        'company': 'Habitant Morbi Tristique Company',
        'office': 'Lede',
        'startDate': 'January 2nd, 2015',
        'salary': '$485,292.39'
      },
      {
        'name': 'Erasmus',
        'company': 'Ad Inc.',
        'office': 'Holywell',
        'startDate': 'May 18th, 2013',
        'salary': '$089,276.76'
      },
      {
        'name': 'Herman',
        'company': 'Purus PC',
        'office': 'Salerno',
        'startDate': 'December 25th, 2011',
        'salary': '$506,785.31'
      },
      {
        'name': 'Travis',
        'company': 'Ante Inc.',
        'office': 'Grafton',
        'startDate': 'February 18th, 2013',
        'salary': '$509,585.54'
      },
      {
        'name': 'Jaime',
        'company': 'Sed Hendrerit A Corporation',
        'office': 'Beerse',
        'startDate': 'October 17th, 2006',
        'salary': '$780,839.78'
      },
      {
        'name': 'Libby',
        'company': 'Pede Nec Ante Associates',
        'office': 'Bad Neuenahr-Ahrweiler',
        'startDate': 'September 15th, 2002',
        'salary': '$86,363.97'
      },
      {
        'name': 'Cheyenne',
        'company': 'Rutrum Lorem Ac Foundation',
        'office': 'Ayr',
        'startDate': 'September 12th, 2007',
        'salary': '$92,683.35'
      },
      {
        'name': 'Ashely',
        'company': 'Lacinia At Limited',
        'office': 'North Berwick',
        'startDate': 'January 15th, 2010',
        'salary': '$77,223.68'
      },
      {
        'name': 'Steven',
        'company': 'Lobortis Incorporated',
        'office': 'Bergen',
        'startDate': 'August 11th, 2008',
        'salary': '$173,421.15'
      },
      {
        'name': 'Samantha',
        'company': 'Ut Mi Duis Consulting',
        'office': 'Olympia',
        'startDate': 'November 1st, 2000',
        'salary': '$610,615.49'
      },
      {
        'name': 'Tanek',
        'company': 'Sed Consulting',
        'office': 'Primavera',
        'startDate': 'December 24th, 2006',
        'salary': '$531,186.93'
      },
      {
        'name': 'Cally',
        'company': 'Dapibus Foundation',
        'office': 'Ottawa-Carleton',
        'startDate': 'August 26th, 2010',
        'salary': '$55,844.38'
      },
      {
        'name': 'Ulysses',
        'company': 'Sit Amet Inc.',
        'office': 'Unnao',
        'startDate': 'May 13th, 2011',
        'salary': '$31,900.35'
      },
      {
        'name': 'Kay',
        'company': 'Pharetra Associates',
        'office': 'Kukatpalle',
        'startDate': 'November 6th, 2003',
        'salary': '$32,124.01'
      },
      {
        'name': 'McKenzie',
        'company': 'Tellus Industries',
        'office': 'Lasne',
        'startDate': 'June 27th, 2004',
        'salary': '$764,333.54'
      },
      {
        'name': 'Abraham',
        'company': 'Eu Sem PC',
        'office': 'Sombreffe',
        'startDate': 'June 21st, 2007',
        'salary': '$55,023.44'
      },
      {
        'name': 'Hu',
        'company': 'Semper Nam Corp.',
        'office': 'Crescentino',
        'startDate': 'August 29th, 2011',
        'salary': '$981,628.21'
      },
      {
        'name': 'Barbara',
        'company': 'Vitae Sodales Nisi Industries',
        'office': 'Merksplas',
        'startDate': 'June 21st, 2014',
        'salary': '$735,343.29'
      },
      {
        'name': 'Davis',
        'company': 'Enim Sit Amet Corp.',
        'office': 'Great Yarmouth',
        'startDate': 'May 8th, 2009',
        'salary': '$977,281.22'
      },
      {
        'name': 'Kai',
        'company': 'Gravida Mauris Ut LLP',
        'office': 'Viggianello',
        'startDate': 'January 24th, 2004',
        'salary': '$648,933.38'
      },
      {
        'name': 'Bernard',
        'company': 'Risus A Ultricies Company',
        'office': 'Denver',
        'startDate': 'April 23rd, 2012',
        'salary': '$47,200.87'
      },
      {
        'name': 'Tasha',
        'company': 'Diam Limited',
        'office': 'Arvier',
        'startDate': 'July 15th, 2014',
        'salary': '$97,905.24'
      },
      {
        'name': 'Kim',
        'company': 'In Consequat Enim LLC',
        'office': 'Hannche',
        'startDate': 'January 10th, 2002',
        'salary': '$772,549.86'
      },
      {
        'name': 'Francisca',
        'company': 'Common Industries',
        'office': 'Plainevaux',
        'startDate': 'July 6th, 2002',
        'salary': '$16,200.60'
      },
      {
        'name': 'Haley',
        'company': 'Ante Ltd',
        'office': 'Detroit',
        'startDate': 'March 31st, 2008',
        'salary': '$951,003.36'
      },
      {
        'name': 'Lucas',
        'company': 'Bibendum Ullamcorper Duis Industries',
        'office': 'Opheylissem',
        'startDate': 'September 9th, 2000',
        'salary': '$307,455.84'
      },
      {
        'name': 'Ina',
        'company': 'Sodales Purus PC',
        'office': 'Andernach',
        'startDate': 'August 22nd, 2010',
        'salary': '$785,285.49'
      },
      {
        'name': 'Candace',
        'company': 'At Inc.',
        'office': 'Neustadt am Rübenberge',
        'startDate': 'October 28th, 2001',
        'salary': '$26,699.45'
      },
      {
        'name': 'Bruno',
        'company': 'Eros Nam Consequat Foundation',
        'office': 'Mount Gambier',
        'startDate': 'April 1st, 2001',
        'salary': '$33,748.19'
      },
      {
        'name': 'Armand',
        'company': 'Hendrerit A Associates',
        'office': 'Ipswich',
        'startDate': 'June 19th, 2005',
        'salary': '$15,127.34'
      },
      {
        'name': 'Solomon',
        'company': 'Velit Institute',
        'office': 'Santa Inês',
        'startDate': 'December 1st, 2015',
        'salary': '$973,534.98'
      },
      {
        'name': 'Brock',
        'company': 'Ultricies Dignissim Lacus Incorporated',
        'office': 'Nedlands',
        'startDate': 'June 13th, 2007',
        'salary': '$67,421.95'
      },
      {
        'name': 'Kylan',
        'company': 'Phasellus Incorporated',
        'office': 'Surat',
        'startDate': 'May 9th, 2014',
        'salary': '$930,454.95'
      },
      {
        'name': 'Tyrone',
        'company': 'Scelerisque Sed Industries',
        'office': 'Niel-bij-As',
        'startDate': 'January 23rd, 2007',
        'salary': '$97,941.04'
      },
      {
        'name': 'Wesley',
        'company': 'Enim LLC',
        'office': 'Villa Alemana',
        'startDate': 'November 15th, 2000',
        'salary': '$24,009.66'
      }
    ];

  }

  /**
   * Retorna o array de 'perfis'.
   *
   * @returns any[]
   */
  public getUsuarios(): any[] {
    return this.usuarios;
  }

  /**
   * Retorna a instância de 'Perfil'.
   */
  public getUsuario(id: any): any {
    // TODO - verificar predicado de comparação com ===
    return this.getUsuarios().filter(e => e.id == id)[0];
  }

}
