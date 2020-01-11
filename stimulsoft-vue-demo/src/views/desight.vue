<template>
  <div id="desight" style="margin-top:1.2em"></div>
</template>

<script>
export default {
  mounted(){
    this._initDisReportModel()
  },
  methods:{
    _initDisReportModel(){
      let report = new Stimulsoft.Report.StiReport()
      //这是个demo的模板文件，网上找的
      let jsonFile = {
          "ReportVersion": "2019.4.2",
          "ReportGuid": "eebae57355a5c980caebe557ea8bc275",
          "ReportName": "Report",
          "ReportAlias": "Report",
          "ReportFile": "demo.mrt",
          "ReportCreated": "/Date(1574391953000+0800)/",
          "ReportChanged": "/Date(1574391953000+0800)/",
          "EngineVersion": "EngineV2",
          "CalculationMode": "Interpretation",
          "ReportUnit": "Centimeters",
          "PreviewSettings": 268435455,
          "Dictionary": {
            "DataSources": {
              "0": {
                "Ident": "StiDataTableSource",
                "Name": "root",
                "Alias": "root",
                "Columns": {
                  "0": {
                    "Name": "title",
                    "Index": -1,
                    "NameInSource": "title",
                    "Alias": "title",
                    "Type": "System.String"
                  }
                },
                "NameInSource": "初始数据.root"
              }
            }
          },
          "Pages": {
            "0": {
              "Ident": "StiPage",
              "Name": "Page1",
              "Guid": "55d142ec1b71d4b50a5e03292047ff5d",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Border": ";;2;;;;;solid:Black",
              "Brush": "solid:Transparent",
              "Components": {
                "0": {
                  "Ident": "StiBarCode",
                  "Name": "BarCode1",
                  "ClientRectangle": "2.6,1.4,11.2,6",
                  "Interaction": {
                    "Ident": "StiInteraction"
                  },
                  "Border": ";;;;;;;solid:Black",
                  "BackColor": "Transparent",
                  "BarCodeType": {
                    "Ident": "StiEAN128cBarCodeType"
                  },
                  "Code": {
                    "Value": "0123456789012345"
                  }
                }
              },
              "PageWidth": 21,
              "PageHeight": 29.7,
              "Watermark": {
                "TextBrush": "solid:50,0,0,0"
              },
              "Margins": {
                "Left": 1,
                "Right": 1,
                "Top": 1,
                "Bottom": 1
              }
            }
          }
        }
      report.load(jsonFile);
      let data = {
        name:'小方块',
        age:18
      }
      let strDataSorce = JSON.stringify(data)                      //实例化一个数据源
      var dataSet = new Stimulsoft.System.Data.DataSet('hardy')    //设置数据源
      dataSet.readJson(strDataSorce)                               //给数据源赋值
      report.regData('hardy', 'hardy', dataSet)                    //注册数据源
      report.dictionary.synchronize()                              //更新字典

      let options = new Stimulsoft.Designer.StiDesignerOptions()
      options.appearance.fullScreenMode = false      //是否全屏
      options.toolbar.showFileMenuExit = true       //显示文件菜单的退出
      options.toolbar.showFileMenuClose = false     //不显示关闭按钮
      options.toolbar.showFileMenuSaveAs = true     //文件菜单显示另存为

      let designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false)
      designer.onSaveReport = function (args) {
        let jsonReport = args.report.saveToJsonString()     //拿到当前设计的这个模板的jsonfile
        console.log(jsonReport)
      }

      //另存为    点文件菜单的另存为触发
      designer.onSaveAsReport = function(args){
        let jsonReport = args.report.saveToJsonString()     //拿到当前设计的这个模板的jsonfile
        console.log(jsonReport)
      }

      //退出       点文件菜单的退出触发
      designer.onExit = function(){
        console.log('您点了退出')
      }
      designer.report = report
      designer.renderHtml('desight')
    }
  }
}
</script>
