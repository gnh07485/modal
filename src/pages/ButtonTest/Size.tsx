import {Button} from '../../theme/daisyui'

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">Size</h2>
      <div className="mt-4 flex justify-evenly">
        <Button className="btn-lg btn-primary">라지 사이즈 버튼</Button>
        <Button className="btn-md btn-secondary">미드 사이즈 버튼</Button>
        <Button className="btn-sm btn-accent">스몰 사이즈 버튼</Button>
        <Button className="btn-xs btn-info">X 스몰 사이즈 버튼</Button>
      </div>
    </section>
  )
}
