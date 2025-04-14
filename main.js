document.addEventListener('DOMContentLoaded', () => {
    // Theme toggling
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check if user has a preferred theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Sidebar toggle for mobile
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Module expansion
    const moduleHeaders = document.querySelectorAll('.module-header');
    
    moduleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the active class on the module lessons
            const moduleLessons = header.nextElementSibling;
            const isActive = moduleLessons.classList.contains('active');
            
            // Close all other open modules
            document.querySelectorAll('.module-lessons.active').forEach(item => {
                if (item !== moduleLessons) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle the current module
            if (isActive) {
                moduleLessons.classList.remove('active');
            } else {
                moduleLessons.classList.add('active');
            }
        });
    });
    
    // Lesson navigation
    const lessonItems = document.querySelectorAll('.module-lessons li');
    
    lessonItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all lessons
            lessonItems.forEach(lesson => {
                lesson.classList.remove('active');
            });
            
            // Add active class to clicked lesson
            item.classList.add('active');
            
            // Load the lesson content
            const lessonId = item.getAttribute('data-lesson');
            loadLesson(lessonId);
        });
    });
    
    // Save progress
    const saveProgress = document.getElementById('save-progress');
    
    saveProgress.addEventListener('click', () => {
        const activeLesson = document.querySelector('.module-lessons li.active');
        
        if (activeLesson) {
            const lessonId = activeLesson.getAttribute('data-lesson');
            localStorage.setItem('currentLesson', lessonId);
            
            // Save editor content if it exists
            const editor = ace.edit('code-editor');
            const editorContent = editor.getValue();
            localStorage.setItem(`code-${lessonId}`, editorContent);
            
            alert('Progress saved successfully!');
        } else {
            alert('No lesson selected to save progress.');
        }
    });
    
    // Load saved progress if available
    const savedLesson = localStorage.getItem('currentLesson');
    
    if (savedLesson) {
        const lessonElement = document.querySelector(`[data-lesson="${savedLesson}"]`);
        
        if (lessonElement) {
            // Open the module containing this lesson
            const moduleLesson = lessonElement.closest('.module-lessons');
            moduleLesson.classList.add('active');
            
            // Mark the lesson as active
            lessonElement.classList.add('active');
            
            // Load the lesson content
            loadLesson(savedLesson);
        }
    }
    
    // Navigation buttons
    const prevButton = document.getElementById('prev-lesson');
    const nextButton = document.getElementById('next-lesson');
    
    prevButton.addEventListener('click', () => {
        const activeLesson = document.querySelector('.module-lessons li.active');
        
        if (activeLesson) {
            const prevLesson = activeLesson.previousElementSibling;
            
            if (prevLesson) {
                // If there's a previous lesson in the same module
                activeLesson.classList.remove('active');
                prevLesson.classList.add('active');
                loadLesson(prevLesson.getAttribute('data-lesson'));
            } else {
                // If we need to go to the previous module
                const currentModule = activeLesson.closest('.module-item');
                const prevModule = currentModule.previousElementSibling;
                
                if (prevModule) {
                    const prevModuleLessons = prevModule.querySelector('.module-lessons');
                    const lastLessonInPrevModule = prevModuleLessons.lastElementChild;
                    
                    if (lastLessonInPrevModule) {
                        // Open the previous module
                        document.querySelectorAll('.module-lessons.active').forEach(item => {
                            item.classList.remove('active');
                        });
                        prevModuleLessons.classList.add('active');
                        
                        // Select the last lesson in that module
                        activeLesson.classList.remove('active');
                        lastLessonInPrevModule.classList.add('active');
                        loadLesson(lastLessonInPrevModule.getAttribute('data-lesson'));
                    }
                }
            }
        }
    });
    
    nextButton.addEventListener('click', () => {
        const activeLesson = document.querySelector('.module-lessons li.active');
        
        if (activeLesson) {
            const nextLesson = activeLesson.nextElementSibling;
            
            if (nextLesson) {
                // If there's a next lesson in the same module
                activeLesson.classList.remove('active');
                nextLesson.classList.add('active');
                loadLesson(nextLesson.getAttribute('data-lesson'));
            } else {
                // If we need to go to the next module
                const currentModule = activeLesson.closest('.module-item');
                const nextModule = currentModule.nextElementSibling;
                
                if (nextModule) {
                    const nextModuleLessons = nextModule.querySelector('.module-lessons');
                    const firstLessonInNextModule = nextModuleLessons.firstElementChild;
                    
                    if (firstLessonInNextModule) {
                        // Open the next module
                        document.querySelectorAll('.module-lessons.active').forEach(item => {
                            item.classList.remove('active');
                        });
                        nextModuleLessons.classList.add('active');
                        
                        // Select the first lesson in that module
                        activeLesson.classList.remove('active');
                        firstLessonInNextModule.classList.add('active');
                        loadLesson(firstLessonInNextModule.getAttribute('data-lesson'));
                    }
                }
            }
        }
    });
});

// Load lesson content function
function loadLesson(lessonId) {
    // Hide welcome screen
    document.getElementById('welcome-screen').classList.add('hidden');
    
    // Show the lesson content and code environment
    document.getElementById('code-environment').classList.remove('hidden');
    document.getElementById('exercises').classList.remove('hidden');
    
    // Check if lessons data is loaded
    if (typeof lessons === 'undefined') {
        console.error('Lessons data is not loaded yet');
        return;
    }
    
    const lesson = lessons[lessonId];
    
    if (!lesson) {
        console.error(`Lesson ${lessonId} not found`);
        return;
    }
    
    // Update lesson content
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.innerHTML = `
        <h2>${lesson.title}</h2>
        ${marked.parse(lesson.content)}
    `;
    
    // Update exercise content
    const exerciseContent = document.getElementById('exercise-content');
    exerciseContent.innerHTML = lesson.exercises ? marked.parse(lesson.exercises) : 'No exercises for this lesson.';
    
    // Set up code editor with starter code
    const editor = ace.edit('code-editor');
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/c_cpp');
    
    // Check if user has saved code for this lesson
    const savedCode = localStorage.getItem(`code-${lessonId}`);
    
    if (savedCode) {
        editor.setValue(savedCode);
    } else {
        editor.setValue(lesson.starterCode || '// Write your C code here\n');
    }
    
    editor.clearSelection();
    
    // Highlight all code blocks
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
    
    // Set up show solution button
    const showSolutionButton = document.getElementById('show-solution');
    
    showSolutionButton.addEventListener('click', () => {
        if (lesson.solution) {
            const editor = ace.edit('code-editor');
            editor.setValue(lesson.solution);
            editor.clearSelection();
        } else {
            alert('No solution available for this exercise.');
        }
    });
    
    // Reset button functionality
    document.getElementById('reset-code').addEventListener('click', () => {
        const editor = ace.edit('code-editor');
        editor.setValue(lesson.starterCode || '// Write your C code here\n');
        editor.clearSelection();
    });
    
    // Clear output button functionality
    document.getElementById('clear-output').addEventListener('click', () => {
        document.getElementById('code-output').textContent = '';
    });
}
