/*! For license information please see node-playground-editor.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2900:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var monacoApi=_interopRequireWildcard(__webpack_require__(1934)),_standaloneServices=__webpack_require__(2189),_monacoVim=__webpack_require__(3041),React=_interopRequireWildcard(__webpack_require__(0)),_reactMonacoEditor=_interopRequireDefault(__webpack_require__(3050)),_vsWebviz=_interopRequireDefault(__webpack_require__(3055)),_projectConfig=__webpack_require__(2288),_inScreenshotTests=_interopRequireDefault(__webpack_require__(160));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};desc.get||desc.set?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,newObj}const codeEditorService=_standaloneServices.StaticServices.codeEditorService.get(),gotoSelection=(editor,selection)=>{if(selection)if(selection.endLineNumber&&selection.endColumn)editor.setSelection(selection),editor.revealRangeInCenter(selection,1);else{const pos={lineNumber:selection.startLineNumber,column:selection.startColumn};editor.setPosition(pos),editor.revealPositionInCenter(pos,1)}},projectConfig=(0,_projectConfig.getNodeProjectConfig)();var _default=({script:script,setScriptCode:setScriptCode,vimMode:vimMode,resizeKey:resizeKey,save:save,setScriptOverride:setScriptOverride,rosLib:rosLib})=>{const editorRef=React.useRef(null),vimModeRef=React.useRef(null);React.useEffect(()=>{editorRef.current&&(vimMode?vimModeRef.current=(0,_monacoVim.initVimMode)(editorRef.current):vimModeRef.current&&vimModeRef.current.dispose())},[vimMode]),React.useEffect(()=>{monacoApi.languages.typescript.typescriptDefaults.addExtraLib(rosLib,"file:///node_modules/@types/"+projectConfig.rosLib.fileName)},[rosLib]),codeEditorService.doOpenEditor=React.useCallback((editor,input)=>{const requestedModel=monacoApi.editor.getModel(input.resource);return requestedModel?requestedModel.uri.path!==(null==script?void 0:script.filePath)?(setScriptOverride({filePath:requestedModel.uri.path,code:requestedModel.getValue(),readOnly:!0,selection:input.options?input.options.selection:void 0}),editor):void gotoSelection(editor,input.options.selection):editor},[script,setScriptOverride]),React.useEffect(()=>{const editor=editorRef.current;if(!editorRef||!script)return;const filePath=monacoApi.Uri.parse("file://"+script.filePath),model=monacoApi.editor.getModel(filePath)||monacoApi.editor.createModel(script.code,"typescript",filePath);model.getValue()!==script.code&&model.setValue(script.code),editor.setModel(model),gotoSelection(editor,script.selection)},[script]);const options=React.useMemo(()=>({wordWrap:"on",minimap:{enabled:!1},readOnly:null==script?void 0:script.readOnly}),[script]),willMount=React.useCallback(monaco=>{if(!script)return;monaco.editor.defineTheme("vs-webviz",_vsWebviz.default),monaco.languages.typescript.typescriptDefaults.setEagerModelSync(!0),monaco.languages.typescript.javascriptDefaults.setEagerModelSync(!0),(0,_inScreenshotTests.default)()&&monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0}),projectConfig.declarations.forEach(lib=>monaco.languages.typescript.typescriptDefaults.addExtraLib(lib.sourceCode,"file:///node_modules/@types/"+lib.fileName)),projectConfig.utilityFiles.forEach(sourceFile=>{const filePath=monacoApi.Uri.parse("file://"+sourceFile.filePath);(monaco.editor.getModel(filePath)||monaco.editor.createModel(sourceFile.sourceCode,"typescript",filePath)).updateOptions({tabSize:2})});const filePath=monacoApi.Uri.parse("file://"+script.filePath),model=monaco.editor.getModel(filePath)||monaco.editor.createModel(script.code,"typescript",filePath);return model.updateOptions({tabSize:2}),{model:model}},[script]),didMount=React.useCallback(editor=>{editorRef.current=editor,vimMode&&(vimModeRef.current=(0,_monacoVim.initVimMode)(editorRef.current)),editor.addAction({id:"ctrl-s",label:"Save current node",keybindings:[monacoApi.KeyMod.CtrlCmd|monacoApi.KeyCode.KEY_S],run:()=>{if(null==editorRef?void 0:editorRef.current){const model=editorRef.current.getModel();model&&script&&!script.readOnly&&save(model.getValue())}}})},[save,script,vimMode]),onChange=React.useCallback(scr=>{setScriptCode(scr)},[setScriptCode]);return script?React.createElement(_reactMonacoEditor.default,{key:resizeKey,language:"typescript",theme:"vs-webviz",editorWillMount:willMount,editorDidMount:didMount,options:options,onChange:onChange}):null};exports.default=_default},3055:function(module){module.exports=JSON.parse('{"base":"vs-dark","inherit":true,"rules":[{"foreground":"6c6783","token":"comment"},{"foreground":"eba800","token":"string"},{"foreground":"9987ff","token":"constant.numeric"},{"foreground":"9987ff","token":"constant.language"},{"foreground":"9987ff","token":"constant.character"},{"foreground":"9987ff","token":"constant.other"},{"foreground":"e05ffa","token":"keyword"},{"foreground":"e05ffa","token":"storage"},{"foreground":"45a5ff","fontStyle":"italic","token":"storage.type"},{"foreground":"6bd66f","fontStyle":"underline","token":"entity.name.class"},{"foreground":"6bd66f","fontStyle":"italic underline","token":"entity.other.inherited-class"},{"foreground":"6bd66f","token":"entity.name.function"},{"foreground":"fc8942","fontStyle":"italic","token":"variable.parameter"},{"foreground":"db3553","token":"entity.name.tag"},{"foreground":"6bd66f","token":"entity.other.attribute-name"},{"foreground":"45a5ff","token":"support.function"},{"foreground":"45a5ff","token":"support.constant"},{"foreground":"45a5ff","fontStyle":"italic","token":"support.type"},{"foreground":"45a5ff","fontStyle":"italic","token":"support.class"},{"foreground":"f0f0f0","background":"ff6b82","token":"invalid"},{"foreground":"f0f0f0","background":"6858f5","token":"invalid.deprecated"}],"colors":{"editor.foreground":"#F7F7F3C4","editor.background":"#1A1A1F","editor.selectionBackground":"#F7F7F326","editor.lineHighlightBackground":"#F7F7F31A","editorCursor.foreground":"#F7F7F3C4","editorWhitespace.foreground":"#3B3A32"}}')}}]);
//# sourceMappingURL=node-playground-editor.js.map