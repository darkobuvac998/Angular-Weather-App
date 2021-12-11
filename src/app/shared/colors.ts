export abstract class Colors {
  public static colors = [
    {
      range: '-100|-18',
      color: '#2c005f',
    },
    {
      range: '-18|-12',
      colors: '#3c0080',
    },
    {
      range: '11|20',
      color: '#800080',
    },
    {
      range: '-12|-7',
      color: '#0000ff',
    },
    {
      range: '-7|-1',
      color: '#87ceeb',
    },
    {
      range: '-1|4',
      color: '#008000',
    },
    {
      range: '4|10',
      color: '#05c705',
    },
    {
      range: '10|16',
      color: '#ffff00',
    },
    {
      range: '16|21',
      color: '#ffa500',
    },
    {
      range: '21|27',
      color: '#f51f1f',
    },
    {
      range: '27|32',
      color: '#d80000',
    },
    {
      range: '32|38',
      color: '#8b0000',
    },
  ];

  public static getColorByTemperature(temp: number){
    return this.colors.find((item) => {
      let borders = item.range.split('|');
      let con = ((+borders[0]) <= temp) && ((temp < +borders[1]));
      return con;
    }).color;
  }
}
