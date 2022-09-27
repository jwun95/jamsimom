// export function debounce (callback: () => void, delay: number){
//   let timer: string | number | NodeJS.Timeout | undefined
//   return (...args: any) => {
//     // 실행한 함수(setTimeout())를 취소
//     clearTimeout(timer)
//     // delay가 지나면 callback 함수를 실행
//     timer = setTimeout(() => callback(...args), delay)
//   }
// }

export function debounce<Params extends any[]>(func: (...args: Params) => any,timeout:number): (...args: Params) => void {
let timer: NodeJS.Timeout
return (...args: Params) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    func(...args)
  }, timeout)
}
}