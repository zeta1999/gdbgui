let constants = {
    'ENTER_BUTTON_NUM': 13,
    'TAB_BUTTON_NUM': 9,
    'LEFT_BUTTON_NUM': 37,
    'UP_BUTTON_NUM': 38,
    'RIGHT_BUTTON_NUM': 39,
    'DOWN_BUTTON_NUM': 40,
    'Y_BUTTON_NUM': 89,
    'N_BUTTON_NUM': 78,
    'COMMA_BUTTON_NUM': 188,
    'DATE_FORMAT': 'dddd, MMMM Do YYYY, h:mm:ss a',
    'ANIMATED_REFRESH_ICON': "<span class='glyphicon glyphicon-refresh glyphicon-refresh-animate'></span>",
    'IGNORE_ERRORS_TOKEN_STR': '1',
    'DISASSEMBLY_FOR_MISSING_FILE_STR': '2',
    'CREATE_VAR_STR': '3',

    console_entry_type: {
        SENT_COMMAND: 'SENT_COMMAND',
        STD_ERR: 'STD_ERR',
        STD_OUT: 'STD_OUT',
        BACKTRACE_LINK: 'BACKTRACE_LINK'
    },

    'source_code_states': {
        ASSM_AND_SOURCE_CACHED: 'ASSM_AND_SOURCE_CACHED',
        SOURCE_CACHED: 'SOURCE_CACHED',
        FETCHING_SOURCE: 'FETCHING_SOURCE',
        ASSM_CACHED: 'ASSM_CACHED',
        FETCHING_ASSM: 'FETCHING_ASSM',
        ASSM_UNAVAILABLE: 'ASSM_UNAVAILABLE',
        FILE_MISSING: 'FILE_MISSING',
        NONE_AVAILABLE: 'NONE_AVAILABLE',
    },

    'inferior_states': {
        'unknown': 'unknown',
        'running': 'running',
        'paused': 'paused',
        'exited': 'exited',
    },

    'tree_component_id': 'tree',

    default_max_lines_of_code_to_fetch: 500
}
constants['IGNORE_ERRORS_TOKEN_INT'] = parseInt(constants.IGNORE_ERRORS_TOKEN_STR)
constants['DISASSEMBLY_FOR_MISSING_FILE_INT'] = parseInt(constants.DISASSEMBLY_FOR_MISSING_FILE_STR)
constants['CREATE_VAR_INT'] = parseInt(constants.CREATE_VAR_STR)

export default Object.freeze(constants)
