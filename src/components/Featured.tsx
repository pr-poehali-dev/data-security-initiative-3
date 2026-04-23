export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/adfee325-32e7-4d15-b27e-a3fea11e5128/files/a53d5cd4-496d-4928-a76a-1603d0277f20.jpg"
          alt="Фасовка краски"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Точность на каждом этапе</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Производим краску с точным соответствием цвета — от смешения пигментов до розлива по банкам любого объёма. Собственная лаборатория контроля качества на каждом этапе.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
            Розлив от 100 мл до 50 литров
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
            Более 5000 оттенков в каталоге
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-700">
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
            Допуск по цвету ΔE &lt; 1.0
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Запросить прайс
        </button>
      </div>
    </div>
  );
}