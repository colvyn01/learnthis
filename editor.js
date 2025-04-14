document.addEventListener('DOMContentLoaded', () => {
    // Initialize the Ace editor
    const editor = ace.edit('code-editor');
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/c_cpp');
    editor.setOptions({
        fontSize: '14pt',
        showPrintMargin: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
    });
    
    // Get elements
    const runButton = document.getElementById('run-code');
    const resetButton = document.getElementById('reset-code');
    const showSolutionButton = document.getElementById('show-solution');
    const outputElement = document.getElementById('code-output');
    
    // Run Code button click handler
    runButton.addEventListener('click', () => {
        const code = editor.getValue();
        compileAndRun(code, outputElement);
    });
    
    // Reset Code button click handler is implemented in main.js where we have access to the current lesson
    
    // Show Solution button click handler is implemented in main.js where we have access to the current lesson
    
    // Keyboard shortcut for running code
    editor.commands.addCommand({
        name: 'runCode',
        bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter'},
        exec: function() {
            runButton.click();
        }
    });
    
    // Keyboard shortcut for resetting code
    editor.commands.addCommand({
        name: 'resetCode',
        bindKey: {win: 'Ctrl-Shift-R', mac: 'Command-Shift-R'},
        exec: function() {
            resetButton.click();
        }
    });
    
    // Keyboard shortcut for showing solution
    editor.commands.addCommand({
        name: 'showSolution',
        bindKey: {win: 'Ctrl-Shift-S', mac: 'Command-Shift-S'},
        exec: function() {
            showSolutionButton.click();
        }
    });
    
    // Auto-save code as user types (debounced)
    let saveTimeout;
    editor.session.on('change', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            const activeLesson = document.querySelector('.module-lessons li.active');
            
            if (activeLesson) {
                const lessonId = activeLesson.getAttribute('data-lesson');
                localStorage.setItem(`code-${lessonId}`, editor.getValue());
            }
        }, 1000);
    });
});
