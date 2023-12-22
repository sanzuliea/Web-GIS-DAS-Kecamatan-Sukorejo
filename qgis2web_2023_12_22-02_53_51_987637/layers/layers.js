var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DASSukorejo_1 = new ol.format.GeoJSON();
var features_DASSukorejo_1 = format_DASSukorejo_1.readFeatures(json_DASSukorejo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASSukorejo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASSukorejo_1.addFeatures(features_DASSukorejo_1);
var lyr_DASSukorejo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DASSukorejo_1, 
                style: style_DASSukorejo_1,
                interactive: true,
    title: 'DASSukorejo<br />\
    <img src="styles/legend/DASSukorejo_1_0.png" /> BLUKAR<br />\
    <img src="styles/legend/DASSukorejo_1_1.png" /> BODRI<br />\
    <img src="styles/legend/DASSukorejo_1_2.png" /> LAMPIR<br />\
    <img src="styles/legend/DASSukorejo_1_3.png" /> PENING<br />\
    <img src="styles/legend/DASSukorejo_1_4.png" /> SERAYU<br />\
    <img src="styles/legend/DASSukorejo_1_5.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_DASSukorejo_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DASSukorejo_1];
lyr_DASSukorejo_1.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area__1': 'st_area__1', 'st_length1': 'st_length1', });
lyr_DASSukorejo_1.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'kode_prov': 'TextEdit', 'nama_das': 'TextEdit', 'luas_ha': 'TextEdit', 'kel_m': 'TextEdit', 'prioritas_': 'TextEdit', 'kd_tematik': 'TextEdit', 'kd_region': 'TextEdit', 'kd_lintas': 'TextEdit', 'kd_das': 'TextEdit', 'wil_kerja': 'TextEdit', 'kd_urutdas': 'TextEdit', 'globalid': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'st_area__1': 'TextEdit', 'st_length1': 'TextEdit', });
lyr_DASSukorejo_1.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area__1': 'no label', 'st_length1': 'no label', });
lyr_DASSukorejo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});