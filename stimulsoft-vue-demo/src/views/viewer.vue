<template>
  <div id="viewer" style="margin-top:1.2em"></div>
</template>

<script>
export default {
  mounted() {
    this._initViewReportModel()
  },
  methods: {
    _initViewReportModel(){
      let _this = this
      let options = new Stimulsoft.Viewer.StiViewerOptions()
      options.appearance.fullScreenMode = false      //是否全屏
      options.appearance.scrollbarsMode = false
      options.toolbar.showDesignButton = true
      options.toolbar.printDestination = Stimulsoft.Viewer.StiPrintDestination.Direct
      options.appearance.htmlRenderMode = Stimulsoft.Report.Export.StiHtmlExportMode.Table

      let viewer = new Stimulsoft.Viewer.StiViewer(options, 'StiViewer', false)
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
      let strDataSorce = JSON.stringify(data)
      let dataSet = new Stimulsoft.System.Data.DataSet('hardy')    //数据源名称
      dataSet.readJson(strDataSorce)   
      report.regData('hardy', 'hardy', dataSet)
      report.dictionary.synchronize()  
      viewer.report = report
      viewer.renderHtml('viewer')
    }
  },
}
</script>
