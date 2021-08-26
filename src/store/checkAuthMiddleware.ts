/** 当登录过期时自动跳转登陆页面的中间件 */
export const checkAuthMiddleware = () => {
    return () => (next: (arg0: any) => void) => (action: any) => {
        const msg = action?.msg;
        if (msg !== undefined && msg === "当前操作过期，请重新登录") {
          //  next(logout);
        } else {
            next(action);
        }
    };
};
