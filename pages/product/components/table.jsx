import React from 'react';
import { useTable } from 'react-table';
import { MID } from './data';
import './table.less';

export default function TableMid() {
  return (
    <table cellSpacing="0" cellPadding="0">
      <tbody>
        <tr>
          <td valign="middle">
            <p align="center">
              <b>序号</b>
            </p>
          </td>
          <td valign="middle">
            <p align="center">
              <b>API</b>
            </p>
          </td>
          <td valign="middle">
            <b align="center">CAS</b>
          </td>
          <td valign="top">
            <b align="center">Documentation</b>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">1</p>
          </td>
          <td valign="middle">
            <p align="center">盐酸西那卡塞</p>
            <p align="center">Cinacalcet hydrochloride</p>
          </td>
          <td valign="middle">
            <p align="center">364782-34-3</p>
          </td>
          <td valign="top">
            <p align="center">/</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">2</p>
          </td>
          <td valign="middle">
            <p align="center">富马酸沃诺拉赞</p>
            <p align="center">Vonoprazan fumarate</p>
          </td>
          <td valign="middle">
            <p align="center">1260141-27-2</p>
          </td>
          <td valign="top">
            <p align="center">DMF Processing</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">3</p>
          </td>
          <td valign="middle">
            <p align="center">伊曲茶碱</p>
            <p align="center">Itraphylline</p>
          </td>
          <td valign="middle">
            <p align="center">155270-99-8</p>
          </td>
          <td valign="top">
            <p align="center">DMF Processing</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">4</p>
          </td>
          <td valign="middle">
            <p align="center">托匹司他</p>
            <p align="center">Topiroxostat</p>
          </td>
          <td valign="middle">
            <p align="center">577778-58-6</p>
          </td>
          <td valign="top">
            <p align="center">DMF Processing</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">5</p>
          </td>
          <td valign="middle">
            <p align="center">马西替坦</p>
            <p align="center">macitentan</p>
          </td>
          <td valign="middle">
            <p align="center">441798-33-0</p>
          </td>
          <td valign="top">
            <p align="center">/</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">6</p>
          </td>
          <td valign="middle">
            <p align="center">甲磺酸雷沙吉兰</p>
            <p align="center">Rasagiline mesylate</p>
          </td>
          <td valign="middle">
            <p align="center">161735-79-1</p>
          </td>
          <td valign="top">
            <p align="center">/</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">7</p>
          </td>
          <td valign="middle">
            <p align="center">富马酸非索罗定</p>
            <p align="center">Rasagiline mesylate</p>
          </td>
          <td valign="middle">
            <p align="center">286930-03-8</p>
          </td>
          <td valign="top">
            <p align="center">/</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" valign="middle">
            <p>
              <br />
            </p>
            <p align="center">8</p>
            <p>
              <br />
            </p>
          </td>
          <td valign="middle">
            <p align="center">培哚普利叔丁胺</p>
            <p align="center">Perindopril erbumine</p>
          </td>
          <td valign="middle">
            <p align="center">107133-36-8</p>
          </td>
          <td rowSpan="2" valign="top">
            <p>
              <br />
            </p>
            <p align="center">CEP Processing</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">培哚普利精氨酸</p>
            <p align="center">Perindopril L-Arginine</p>
          </td>
          <td valign="middle">
            <p align="center">612548-45-5</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">9</p>
          </td>
          <td valign="middle">
            <p align="center">酒石酸伐尼克兰</p>
            <p align="center">Varenicline Tartrate</p>
          </td>
          <td valign="middle">
            <p align="center">375815-87-5</p>
          </td>
          <td valign="top">
            <p align="center">/</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">10</p>
          </td>
          <td valign="middle">
            <p align="center">枸橼酸托法替尼</p>
            <p align="center">Tofacitinib citrate</p>
          </td>
          <td valign="middle">
            <p align="center">540737-29-9</p>
          </td>
          <td valign="top">
            <p align="center">/</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p align="center">11</p>
          </td>
          <td valign="middle">
            <p align="center">地夸磷索钠</p>
            <p align="center">Diquafosol Tetrasodium</p>
          </td>
          <td valign="middle">
            <p align="center">211427-08-6</p>
          </td>
          <td valign="top">
            <p align="center">DMF/KDMF Processing</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function TableRes() {
  return (
    <table cellSpacing="0" cellPadding="0">
      <tbody>
        <tr>
          <td valign="middle">
            <b align="center">序号</b>
          </td>
          <td valign="middle">
            <b align="center">Corresponding API</b>
          </td>
          <td valign="middle">
            <b align="center">Intermediate</b>
          </td>
          <td valign="middle">
            <b align="center">CAS</b>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" valign="middle">
            <p>1</p>
          </td>
          <td rowSpan="2" valign="middle">
            <p>沃诺拉赞</p>
            <p>Vonoprazan</p>
          </td>
          <td valign="middle">
            <p>5-(2- 氟苯基 )-1H- 吡咯 -3- 甲醛</p>
            <p>5-(2-Fluorophenyl)-1H-pyrrole-3-carboxaldehyde</p>
          </td>
          <td valign="middle">
            <p>881674-56-2</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>5-(2-氟苯基 )-1-[( 吡啶 -3- 基 ) 磺酰基 ]-1H- 吡咯 -3- 甲醛</p>
            <p>
              5-(2-fluorophenyl)-1-(pyridin-3-ylsulfonyl)-1H-pyrrole-3-carbaldehyde
            </p>
          </td>
          <td valign="middle">
            <p>881677-11-8</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="3" valign="middle">
            <p>2</p>
          </td>
          <td rowSpan="3" valign="middle">
            <p>伊曲茶碱</p>
            <p>Itraphylline</p>
          </td>
          <td valign="middle">
            <p>3,4- 二甲氧基肉桂酸   3,4-Dimethoxycinnamic acid</p>
          </td>
          <td valign="middle">
            <p>14737-89-4</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>
              1,3- 二乙基 -5- 亚硝基 -6- 氨基脲嘧啶  
              1,3-Diethyl-5-Nitro-6-AminoUracil
            </p>
          </td>
          <td valign="middle">
            <p>89073-60-9</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>1,3- 二乙基 -5,6- 二氨基尿嘧啶   1,3-Diethyl-5,6-aminouracil</p>
          </td>
          <td valign="middle">
            <p>52998-22-8</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="3" valign="middle">
            <p>3</p>
          </td>
          <td rowSpan="3" valign="middle">
            <p>托匹司他</p>
            <p>Topiroxostat</p>
          </td>
          <td valign="middle">
            <p>氰基吡啶 -1- 氧化物   4-Cyanopyridinium-1-olate</p>
          </td>
          <td valign="middle">
            <p>14906-59-3</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>
              4-[5-(1- 氧化 -4- 吡啶 )-1H-1,2,4- 噻唑 -3- 基 ] 吡啶  
              （托匹司他中间体 1 ）
            </p>
            <p>Pyridine, 4-[5-(4-pyridinyl)-1H-1,2,4-triazol-3-yl]-, 1-oxide</p>
          </td>
          <td valign="middle">
            <p>36770-53-3</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>托匹司它化合物 A</p>
            <p>
              4-(1-((benzyloxy)methyl)-5-(pyridin-4-yl)-1H-1,2,4-triazol-3-yl)picolinonitrile
            </p>
          </td>
          <td valign="middle">
            <p>837371-70-7</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="3" valign="middle">
            <p>4</p>
          </td>
          <td rowSpan="3" valign="middle">
            <p>马昔替坦</p>
            <p>macitentan</p>
          </td>
          <td valign="middle">
            <p>5-(4- 溴苯基 )-6- 羟基嘧啶 -4(1H)- 酮</p>
            <p>5-(4-Bromophenyl)-6-hydroxypyrimidin-4(1H)-one</p>
          </td>
          <td valign="middle">
            <p>706811-25-8</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>5- （ 4- 溴苯基） -4,6- 二氯嘧啶</p>
            <p>5-(4-Bromophenyl)-4,6-dichloropyrimidine</p>
          </td>
          <td valign="middle">
            <p>146533-41-7</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>
              N-[5-(4- 溴苯基 )-6-(2- 羟基乙氧基 )-4- 嘧啶基 ]-N'-
              丙基氨基磺酰胺
            </p>
            <p>
              SulfaMide,
              N-[5-(4-broMophenyl)-6-(2-hydroxyethoxy)-4-pyriMidinyl]-N'-propyl-
            </p>
          </td>
          <td valign="middle">
            <p>1393813-43-8</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" valign="middle">
            <p>5</p>
          </td>
          <td rowSpan="2" valign="middle">
            <p>雷沙吉兰</p>
            <p>Rasagiline</p>
          </td>
          <td valign="middle">
            <p>氨基茚满盐酸盐     1-Indanamine hydrochloride</p>
          </td>
          <td valign="middle">
            <p>70146-15-5</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>(R)-(-)-1- 氨基茚满盐酸盐</p>
            <p>(R)-(-)-1-Aminoindane hydrochloride</p>
          </td>
          <td valign="middle">
            <p>10305-73-4</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" valign="middle">
            <p>6</p>
          </td>
          <td rowSpan="2" valign="middle">
            <p>非索罗定</p>
            <p>Fesoterodine</p>
          </td>
          <td valign="middle">
            <p>(R)-2-(3-( 二异丙基氨基 )-1- 苯基丙基） -4-( 羟甲基 ) 苯酚</p>
            <p>
              R-(+)-2-(3-diisopropylamino-1-phenylpropyl)-4-hydroxymethylphenol
            </p>
          </td>
          <td valign="middle">
            <p>207679-81-0</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>[3-[ 双 (1- 甲基乙基 ) 氨基 ]-1- 苯基丙基 ]-4- 羟基苯甲醇</p>
            <p>
              3-[3-[Bis(1-Methylethyl)aMino]-1-phenylpropyl]-4-hydroxybenzeneMethanol
            </p>
          </td>
          <td valign="middle">
            <p>200801-70-3</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" valign="middle">
            <p>7</p>
          </td>
          <td rowSpan="2" valign="middle">
            <p>培哚普利 Perindopril</p>
          </td>
          <td valign="middle">
            <p>(2S,3aS,7aS)- 八氢 -1H- 吲哚 -2- 羧酸</p>
            <p>(2S,3αS,7αS)-Octahydro-1H-indole-2-carboxylic acid</p>
          </td>
          <td valign="middle">
            <p>80875-98-5</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>N-[(S)- 乙氧羰基 -1- 丁基 ]-(S)- 丙氨酸</p>
            <p>N-[(S)-1-Carbethoxy-1-butyl]-(S)-alanine</p>
          </td>
          <td valign="middle">
            <p>82834-12-6</p>
          </td>
        </tr>
        <tr>
          <td rowSpan="2" valign="middle">
            <p>8</p>
          </td>
          <td rowSpan="2" valign="middle">
            <p>伐尼克兰</p>
            <p>Varenicline</p>
          </td>
          <td valign="middle">
            <p>2,3,4,5- 四氢 -1,5- 甲桥 -1H-3- 苯并氮杂卓盐酸盐</p>
            <p>2,3,4,5-Tetrahydro-1,5-methano-1H-3-benzazepine hydrochloride</p>
          </td>
          <td valign="middle">
            <p>230615-52-8</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>
              2,3,4,5- 四氢 -7,8- 二硝基 -3-( 三氟乙酰基 )-1,5- 甲桥 -1H-3-
              苯并氮杂卓
            </p>
            <p>
              2,3,4,5-Tetrahydro-7,8-dinitro-3-(trifluoroacetyl)-1,5-methano-1H-3-benzazepine
            </p>
          </td>
          <td valign="middle">
            <p>230615-59-5</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>9</p>
          </td>
          <td valign="middle">
            <p>托法替尼</p>
            <p>Tofacitinib</p>
          </td>
          <td valign="middle">
            <p>4- 氯 -7(H)- 吡咯并 [2,3-D] 嘧啶</p>
            <p>4-Chloro-7H-pyrrolo[2,3-d]pyrimidine</p>
          </td>
          <td valign="middle">
            <p>3680-69-1</p>
          </td>
        </tr>
        <tr>
          <td valign="middle">
            <p>10</p>
          </td>
          <td valign="middle">
            <p>/</p>
          </td>
          <td valign="middle">
            <p>DL- 苹果酸二乙酯  </p>
            <p>Diethyl malate</p>
          </td>
          <td valign="middle">
            <p>7554-12-3</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
