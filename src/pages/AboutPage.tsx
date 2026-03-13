import { asset } from "../utils/asset";

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-b from-[#FFF8F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark mb-4">关于我们</h1>
          <p className="text-gray-600 max-w-2xl">
            小猪网上博物馆是一个数字收藏空间，记录不同年代、不同地域的小猪主题艺术与工艺。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl">
                <img src={asset("/images/hero-pig.png")} alt="馆长" className="w-full h-full object-contain p-8" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-dark">馆长故事</h2>
              <p className="text-gray-600 leading-relaxed">
                从第一只搪瓷猪开始，我就想做一个让“普通物件的记忆”被看见的地方。后来收藏越来越多，便有了这个线上博物馆。
              </p>
              <p className="text-gray-600 leading-relaxed">
                这里的每件展品，都尽量保留了来源、年代与故事。希望你也能在这里找到属于自己的共鸣。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
