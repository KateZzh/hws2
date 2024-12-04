type InitState = typeof initState;

const initState = {
    themeId: 1,
};

export const themeReducer = (state: InitState = initState, action: ActionsType): InitState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id };

        default:
            return state;
    }
};

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const);

//types
type ChangeThemeIdAction = ReturnType<typeof changeThemeId>;

type ActionsType = ChangeThemeIdAction;
